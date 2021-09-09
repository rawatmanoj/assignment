import { Container, Button, Grid, Paper, Modal, MenuItem } from '@material-ui/core'
import React, { useState } from 'react';
import Zoom from '@material-ui/core/Zoom';
import useStyles from '../../utils/hooks/useStyles';

export default function ProductList({ products, setViewMore, viewMore, categories, setCategories, categoryValue, setCategory, categoryName }) {


    const [open, setOpen] = useState(false);
    const classes = useStyles();



    const handleViewMore = () => {
        setViewMore(!viewMore)
    }

    const handleChange = () => {
        setOpen(!open);
    }

    const handleModalClose = () => {
        setOpen(!open)
    }

    const handleChangeCategory = (id, name) => {
        setCategory({ id, name })
        setOpen(!open)
    }




    return (
        <Container>
            <div>

                <Grid container spacing={1}>
                    {/* {renderProduct()} */}
                    {
                        products.map((product, index) => {


                            return (
                                <Grid key={product.id} item xl={12} sm={6} className={classes.grid} >
                                    <div className={classes.wrapper}>
                                        <img src={product.image_urls.x200} alt={product.name} />
                                        <div className={classes.productinfowrapper}>
                                            <div>
                                                <div>{product.name}</div>
                                                <div className={classes.productWeight}>({product.weight} {product.weight_unit})</div>
                                            </div>
                                            <strong>&#8377; {product.final_price}  <del style={{ fontSize: "0.6rem", color: 'grey' }}>  &#8377;{product.price}</del></strong>
                                            <Button disableElevation variant="contained" className={classes.button}>
                                                {product.is_in_stock ? 'Add to Cart' : 'Out of Stock'}
                                            </Button>
                                        </div>
                                    </div>
                                </Grid>
                            )
                        })
                    }

                    <Paper className={classes.footerwrapper} variant="elevation" elevation={0}>
                        <div className={classes.footerContentWrapper}>
                            <div className={classes.footerCatName}>
                                <div>showing for</div>
                                <div><h4>{categoryName}</h4></div>
                            </div>
                            <div className={classes.viewMore}>
                                <div style={{ marginRight: '1rem', cursor: 'pointer' }} onClick={handleChange}>change</div>
                                <div style={{ cursor: 'pointer' }} onClick={handleViewMore}>  {viewMore ? '[-] View Less' : '[+] View More'}</div>
                            </div>
                        </div>


                    </Paper>
                </Grid>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleModalClose}
                    closeAfterTransition
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Zoom in={open}>
                        <div className={classes.zoom}>
                            {
                                categories.length > 0 &&

                                categories.map((category, index) => (
                                    <MenuItem
                                        key={category.category_id}
                                        onClick={() => handleChangeCategory(category.category_id, category.category_name)}
                                        style={{ minWidth: "20rem" }}
                                        selected={categoryValue === category.category_id}
                                    >{category.category_name}</MenuItem>
                                ))
                            }
                        </div>

                    </Zoom>
                </Modal>


            </div>

        </Container >
    )
}
