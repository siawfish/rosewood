import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ImgsViewer from 'react-images-viewer'

export default function ImageViewer({
    property
}) {
    const [active, setActive] = React.useState(0)
    const [openViewer, setOpenViewer] = React.useState(false)

    let images = [] 
    property?.images.forEach(img=>{
        images.push({src:img})
    })

    const gotoNext = ()=>{
        setActive(active+1)
    }

    const gotoPrev = ()=>{
        setActive(active-1)
    }

    return (
        <Container fluid className="listing">
            <Row>
                <Col sm={12} onClick={()=>setOpenViewer(true)} style={{padding:0}} lg={10}>
                    <div className="imageView">
                        <img src={property?.images[active]} alt="" />
                        <div className="count">
                            {images.length}
                        </div>
                    </div>
                </Col>
                <Col className="toHideOnMobile" lg={2}>
                    <Container className="thumbnails">
                        <Row>
                            {
                                property?.images.map((pro, i)=>{
                                    return (
                                        <Col sm={2} onClick={()=>setActive(i)} key={"img-"+i} style={{padding:0}} lg={12}>
                                            <img src={pro} alt="" />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Container>
                </Col>
            </Row>
            <ImgsViewer
                imgs={images}
                currImg={active}
                isOpen={openViewer}
                onClickPrev={gotoPrev}
                onClickNext={gotoNext}
                onClose={()=>setOpenViewer(false)}
            />
        </Container>
    )
}
