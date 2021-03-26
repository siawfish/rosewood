import React from 'react'
import { Modal, Form, Col, Button, Container, Row } from 'react-bootstrap'
import ImageUploader from "react-images-upload"
import { useDispatch } from 'react-redux'
import { API } from '../utils/config'
import { addListings } from '../redux/listingsStore/listingsStore'
import SuccessOpacity from './SuccessOpacity'

export default function AddListingForm({
    onCancel
}) {
    const dispatch = useDispatch()

    React.useEffect(()=>{
        return ()=> resetState()
    },[])
    const checkbox1 = React.useRef(null)
    const checkbox2 = React.useRef(null)
    const [images, setImages] = React.useState([])
    const [err, setErr] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const [listingDetails, setListingsDetails] = React.useState({
        title:"",
        category:"",
        developer:"",
        price:0,
        parkingSpace:0,
        bathrooms:0,
        bedrooms:0,
        desc:"",
        featuredListing:false,
        type:"rent",
        amenities:"",
        area:"",
        location:""
    })
    const [success, setSucess] = React.useState(false)

    React.useEffect(()=> {
        if(listingDetails.type==="rent"){
            if(checkbox1.current.checked){
                checkbox1.current.checked = false
            }
        }
        if(listingDetails.type==="sale"){
            if(checkbox2.current.checked){
                checkbox2.current.checked = false
            }
        }
    })

    const resetState = ()=> {
        setListingsDetails({
            title:"",
            category:"",
            developer:"",
            price:0,
            parkingSpace:0,
            bathrooms:0,
            bedrooms:0,
            desc:"",
            featuredListing:false,
            type:"rent",
            amenities:"",
            area:"",
            location:""
        })
        setImages([])
        setIsLoading(false)
        setErr("")
        setSucess(false)
    }

    const onDrop =(pictureFiles)=> {
        setImages(pictureFiles)
    }

    const onChange = (name, e)=> {
        setErr("")
        setListingsDetails({
            ...listingDetails,
            [name]:name==="featuredListing"?e.target.checked:e.target.value
        })
    }

    const validate = ()=> {
        if(listingDetails.title===""){
            setErr("Enter title")
            return false
        } else if(listingDetails.category===""){
            setErr("Enter category")
            return false
        } else if(listingDetails.price===0||listingDetails.price===""){
            setErr("Enter price")
            return false
        } else if(listingDetails.developer===""){
            setErr("Enter developer")
            return false
        } else if(listingDetails.desc===""){
            setErr("Enter description")
            return false
        } else if(images.length<1){
            setErr("Oopsie! You forgot to upload images")
            return false
        } else if(listingDetails.location===""){
            setErr("Enter location")
            return false
        }
        return true
    }

    const onSubmit = (e)=> {
        e.preventDefault()
        setErr("")
        setIsLoading(true)
        if(!validate()){
            setIsLoading(false)
            return
        }
        const amenitiesArr = listingDetails.amenities.split(',')
        let form = new FormData()
        form.append('title', listingDetails.title)
        form.append('category', listingDetails.category)
        form.append('desc', listingDetails.desc)
        form.append('price', listingDetails.price)
        form.append('developer', listingDetails.developer)
        form.append('parkingSpace', listingDetails.parkingSpace)
        form.append('bathrooms', listingDetails.bathrooms)
        form.append('bedrooms', listingDetails.bedrooms)
        form.append('featuredListing', listingDetails.featuredListing)
        form.append('type', listingDetails.type)
        form.append('amenities', amenitiesArr)
        form.append('area', listingDetails.area)
        form.append('location', listingDetails.location)
        images.forEach(img=>{
            form.append('photos', img)
        })
        API.post("/admin/listings", form)
        .then(res=>{
            if(res.ok){
                dispatch(addListings(res.data.listing))
                setIsLoading(false)
                setSucess(true)
                setTimeout(() => {
                    onCancel()
                }, 3000);
            } else {
                console.log(res);
                setErr(res.data.error)
                setIsLoading(false)
            }
        })
        .catch(e=>console.log(e))
    }

    return (
        <Container className="addressForm">
            {
                success && 
                <SuccessOpacity message="Listing successfully added!" />
            }
            <Modal.Title>Add a listings</Modal.Title>
            <Row>
                <Col lg={5}>
                    <Form.Label>Images</Form.Label>
                    <Container className="imagesWrapper">
                        <ImageUploader
                            withIcon={true}
                            buttonText="Choose images"
                            onChange={onDrop}
                            imgExtension={[".jpg", ".png", ".gif", ".jpeg"]}
                            maxFileSize={5242880}
                            withPreview
                            fileContainerStyle={{backgroundColor:"#000"}}
                        />
                    </Container>
                    <Form.Group controlId="exampleFormType">
                        <Form.Check 
                            onChange={(e)=>onChange("type",e)} 
                            ref={checkbox1} 
                            value="sale" 
                            inline 
                            label="For Sale" 
                            type='checkbox' 
                        />
                        <Form.Check 
                            checked 
                            onChange={(e)=>onChange("type",e)} 
                            ref={checkbox2} 
                            value="rent" 
                            inline 
                            label="Lease/Rent" 
                            type='checkbox' 
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleFormFeatured">
                        <Form.Check 
                            inline 
                            label="Featured listing?" 
                            type='checkbox' 
                            onChange={(e)=>onChange("featuredListing",e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Location</Form.Label>
                        <Form.Control 
                            placeholder="Enter location"
                            defaultValue={listingDetails.location}
                            onChange={(e)=>onChange("location", e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Amenities</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="Enter amenities"
                            defaultValue={listingDetails.amenities}
                            onChange={(e)=>onChange("amenities", e)}
                        />
                        <Form.Text className="text-muted">
                            Enter the various amenties for the listing seperated by comma ( , )
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col lg={7}>
                    <div className="err">{err}</div>
                    <Form.Group controlId="formGridName">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter title" 
                            defaultValue={listingDetails.title}
                            onChange={(e)=>onChange("title", e)}
                        />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter category" 
                                defaultValue={listingDetails.category}
                                onChange={(e)=>onChange("category", e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridArea">
                            <Form.Label>Area (m<sup>2</sup>)</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter area size" 
                                defaultValue={listingDetails.area}
                                onChange={(e)=>onChange("area", e)}
                            />
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridBedrooms">
                            <Form.Label>Bedrooms</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="1" 
                                defaultValue={listingDetails.bedrooms}
                                onChange={(e)=>onChange("bedrooms", e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formPacking">
                            <Form.Label>Parking space</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="1" 
                                defaultValue={listingDetails.parkingSpace}
                                onChange={(e)=>onChange("parkingSpace", e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formBathrooms">
                            <Form.Label>Bathrooms</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="1" 
                                defaultValue={listingDetails.bathrooms}
                                onChange={(e)=>onChange("bathrooms", e)}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridQty">
                            <Form.Label>Developer</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Rebohoth Developers" 
                                defaultValue={listingDetails.developer}
                                onChange={(e)=>onChange("developer", e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formPrice">
                            <Form.Label>Price{listingDetails.type==="rent"&&<sup> per Month</sup>}</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="200,000" 
                                defaultValue={listingDetails.price}
                                onChange={(e)=>onChange("price", e)}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            placeholder="Share some more information about listing"
                            defaultValue={listingDetails.desc}
                            onChange={(e)=>onChange("desc", e)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <div className="featureFormFooter">
                <Button onClick={onCancel} variant="secondary">Close</Button>
                <Button 
                    disabled={isLoading} 
                    onClick={onSubmit} 
                    variant="primary">{
                        isLoading ?
                        "Saving" :
                        "Save"
                    }
                </Button>
            </div>
        </Container>
    )
}
