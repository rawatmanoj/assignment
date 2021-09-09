

import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useScreenSize from '../../utils/hooks/useScreenSize';
import MobileTab from './MobileTab';
import WebTab from './WebTab';
import useStyles from "../../utils/hooks/useStyles";
import Container from "../Container";
import { getRequest } from "../../utils/AxiosUtils";
import ProductList from "./ProductList";
import "../../styles/Home.css"

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        "aria-controls": `scrollable-auto-tabpanel-${index}`
    };
}


export default function Home() {
    const classes = useStyles();
    const [category, setCategory] = useState({
        id: null,
        name: ""
    });
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const screen = useScreenSize();
    const [viewMore, setViewMore] = useState(false)




    useEffect(() => {

        const getHomeMenuCategories = async () => {
            const result = await getRequest(`homemenucategories/v1.0.1?device_type=mob`);
            setCategories(result.data?.category_list);
            setCategory({ id: result.data?.category_list[0].category_id, name: result.data?.category_list[0].category_name })
        }

        getHomeMenuCategories();
    }, [])


    useEffect(() => {

        const getProducts = async () => {
            const result = await getRequest(`catalog/v1.0.1?category_id=${category.id}`);
            if (viewMore) {
                setProducts(result.data?.products);

            } else {
                let firstThree = result.data?.products.filter((product, index) => index < 3);
                setProducts(firstThree)
            }
        }
        if (category.id !== null) {
            getProducts();
        }
    }, [category.id, viewMore])




    const handleChange = (event, newValue, name) => {
        setCategory({ id: newValue, name })
    };




    return (

        <div style={{ padding: '1px' }}>
            <AppBar
                //  style={{ backgroundColor: "white" }}
                elevation={0}
                position="static"
                color="default"
                className={classes.appbar}
                style={{
                    borderBottom: screen.isMobile ? 'none' : '3px solid grey'

                }}
            >
                <Tabs
                    classes={{ root: classes.root, scroller: classes.scroller }}
                    TabIndicatorProps={{
                        style: {
                            display: screen.isMobile ? 'none' : '',
                            height: '2.5px'
                        }

                    }}
                    TabScrollButtonProps={{
                        disabled: true
                    }}

                    value={category.id}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    aria-label="scrollable auto tabs example"
                >
                    {categories.map((item, index) => {
                        return (
                            <Tab
                                key={item.category_id}
                                onClick={(e) => handleChange(e, item.category_id, item.category_name)}
                                value={item.category_id}
                                className={classes.tab}
                                label={
                                    screen.isMobile ? <MobileTab category={item} /> : <WebTab category={item} />
                                }
                                {...a11yProps(index)}
                            />


                        )
                    })}
                </Tabs>
            </AppBar>
            <Container value={category.id} index={category.id}>
                <ProductList
                    products={products}
                    setViewMore={setViewMore}
                    viewMore={viewMore}
                    setCategories={setCategories}
                    categories={categories}
                    categoryValue={category.id}
                    categoryName={category.name}
                    setCategory={setCategory}
                />
            </Container>

        </div>
    );
}

