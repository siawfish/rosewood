import React from 'react'
import { Container, Modal, Row, Col, Button } from 'react-bootstrap'
import ImageUploader from "react-images-upload"

export default function CarouselForm({
    onCancel
}) {
    // const [carousel, setCarousel] = React.useState({
    //     imageOne:{img:"", caption:""},
    //     imageTwo:{img:"", caption:""},
    //     imageThree:{img:"", caption:""}
    // })

    // const onDrop =(name,pictureFiles)=> {
    //     setCarousel({
    //         ...carousel,
    //         [name]:{
    //             ...carousel.name,
    //             img:pictureFiles[0]
    //         }
    //     })
    // }

    // const onChange = (name,e)=> {
    //     setCarousel({
    //         ...carousel,
    //         [name]:{
    //             ...carousel.name,
    //             caption:e.target.value
    //         }
    //     })
    // }
    
    return (
        <Container className="addressForm">
            <Modal.Title>Carousel Images</Modal.Title>
            <Row style={{marginBottom:20}}>
                <Col>
                    <ImageUploader
                        withIcon={true}
                        buttonText="Choose image"
                        // onChange={(pictureFiles)=>onDrop("image"+row,pictureFiles)}
                        imgExtension={[".jpg", ".png", ".gif"]}
                        maxFileSize={5242880}
                        singleImage
                        fileContainerStyle={{backgroundColor:"#000"}}
                    />
                </Col>
            </Row>
            <div className="featureFormFooter">
                <Button onClick={onCancel} variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </div>
        </Container>
    )
}
