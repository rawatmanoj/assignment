import { makeStyles } from "@material-ui/core/styles";
// import useScreen from "./useScreenSize"
export default makeStyles((theme) => {


    return ({
        root: {
            flexGrow: 1,
            width: "100%",
            backgroundColor: 'white',
            marginTop: '2rem',
            justifyContent: "center",
            //  marginLeft: '1rem'

        },
        appbar: {
            backgroundColor: 'white',
            // borderBottom: useScreen().isMobile ? '0' : '3px solid grey'

        },
        tab: {

            minWidth: "60px",
            height: "65px",
            //backgroundColor: "red",
            padding: 0,
            borderRadius: "6px",
            marginRight: '2rem'
        },
        scroller: {
            flexGrow: "0"
        },
        modal: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        zoom: {
            backgroundColor: theme.palette.background.paper,
            //  border: '2px solid #000',
            // boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        grid: {
            height: "200px",
            padding: '10px',
            margin: '0 auto',
            marginBottom: '4rem'
        },
        wrapper: {
            display: 'flex', flexDirection: 'row', position: 'relative', justifyContent: 'center', height: '100%',
        },
        productinfowrapper: {
            height: '75%', alignSelf: 'flex-end', width: '10rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'
        },
        productWeight: {
            color: 'grey', fontSize: '0.7rem'
        },
        footerwrapper: {
            width: '100%',
        },
        footerContentWrapper: {
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', fontSize: "0.8rem", color: 'grey'
        },
        footerCatName: {
            width: '12rem', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'
        },
        viewMore: {
            width: '12rem', display: 'flex', marginLeft: "2rem"
        },
        button: {
            backgroundColor: '#4FCF64', color: 'white'
        }
    })
});
