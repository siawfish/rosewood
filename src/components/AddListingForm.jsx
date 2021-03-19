import React from 'react'
import { Modal, Form, Col, Button, Container, Row } from 'react-bootstrap'
import ImageUploader from "react-images-upload"
// import { useSelector, useDispatch } from 'react-redux'
// import { API } from '../../assets/utils/constants'
// import { updateProducts } from '../../redux/productsStore/productsStore'
// import SuccessOpacity from '../successOpacity/SuccessOpacity'

export default function AddListingForm({
    onCancel
}) {
    // const { authToken } = useSelector(state=>state?.app)
    // const dispatch = useDispatch()

    // React.useEffect(()=>{
    //     return ()=> resetState()
    // },[])

    // const [images, setImages] = React.useState([])
    // const [err, setErr] = React.useState("")
    // const [isLoading, setIsLoading] = React.useState(false)
    // const [productDetails, setProductDetails] = React.useState({
    //     name:"",
    //     desc:"",
    //     price:0,
    //     qty:0,
    //     category:""
    // })
    // const [success, setSucess] = React.useState(false)

    // const resetState = ()=> {
    //     setProductDetails({
    //         name:"",
    //         desc:"",
    //         price:0,
    //         qty:0,
    //         category:""
    //     })
    //     setImages([])
    //     setIsLoading(false)
    //     setErr("")
    //     setSucess(false)
    // }

    // const onDrop =(pictureFiles)=> {
    //     setImages(pictureFiles)
    // }

    // const onChange = (name, e)=> {
    //     setErr("")
    //     setProductDetails({
    //         ...productDetails,
    //         [name]:e.target.value
    //     })
    // }

    // const validate = ()=> {
    //     if(productDetails.name===""){
    //         setErr("Enter product name")
    //         return false
    //     } else if(productDetails.category===""){
    //         setErr("Enter product category")
    //         return false
    //     } else if(productDetails.price===0||productDetails.price===""){
    //         setErr("Enter product price")
    //         return false
    //     } else if(productDetails.qty===0||productDetails.qty===""){
    //         setErr("Enter product qty")
    //         return false
    //     } else if(productDetails.desc===""){
    //         setErr("Enter product description")
    //         return false
    //     } else if(images.length<1){
    //         setErr("Oopsie! You forgot to upload images")
    //         return false
    //     }
    //     return true
    // }

    // const onSubmit = (e)=> {
    //     e.preventDefault()
    //     setErr("")
    //     setIsLoading(true)
    //     if(!validate()){
    //         setIsLoading(false)
    //         return
    //     }
    //     let form = new FormData()
    //     form.append('name', productDetails.name)
    //     form.append('category', productDetails.category)
    //     form.append('desc', productDetails.desc)
    //     form.append('price', productDetails.price)
    //     form.append('qty', productDetails.qty)
    //     images.forEach(img=>{
    //         form.append('photos', img)
    //     })
    //     API.setHeaders({
    //         'Authorization':'Bearer '+authToken,
    //         'Content-Type': 'multipart/form-data'
    //     })
    //     API.post("admin/product", form)
    //     .then(res=>{
    //         if(res.ok){
    //             dispatch(updateProducts(res.data.product))
    //             setIsLoading(false)
    //             setSucess(true)
    //             setTimeout(() => {
    //                 onCancel()
    //             }, 3000);
    //         } else {
    //             console.log(res);
    //             setErr(res.data.error)
    //             setIsLoading(false)
    //         }
    //     })
    //     .catch(e=>console.log(e))
    // }

    return (
        <Container className="addressForm">
            {/* {
                success && 
                <SuccessOpacity message="Product successfully saved!" />
            } */}
            <Modal.Title>Add a listings</Modal.Title>
            <Row>
                <Col lg={5}>
                    <Form.Label>Images</Form.Label>
                    <Container className="imagesWrapper">
                        <ImageUploader
                            withIcon={true}
                            buttonText="Choose images"
                            // onChange={onDrop}
                            imgExtension={[".jpg", ".png", ".gif"]}
                            maxFileSize={5242880}
                            withPreview
                            fileContainerStyle={{backgroundColor:"#000"}}
                        />
                    </Container>
                </Col>
                <Col lg={7}>
                    {/* <div className="err">{err}</div> */}
                    <Form.Group controlId="formGridName">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" />
                    </Form.Group>
                    <Form.Group controlId="formGridCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Enter category" />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridQty">
                            <Form.Label>Developer</Form.Label>
                            <Form.Control type="number" placeholder="Rebohoth Developers" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="200,000" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Col>
            </Row>
            <div className="featureFormFooter">
                <Button onClick={onCancel} variant="secondary">Close</Button>
                <Button 
                    // disabled={isLoading} 
                    // onClick={onSubmit} 
                    variant="primary">{"Save"}
                </Button>
            </div>
        </Container>
    )
}
