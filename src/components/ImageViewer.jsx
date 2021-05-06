import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { baseUrl } from '../utils/data'
import ImgsViewer from 'react-images-viewer'

export default function ImageViewer({
    property
}) {
    const [active, setActive] = React.useState(0)
    const [openViewer, setOpenViewer] = React.useState(false)

    let images = [] 
    property?.images.forEach(img=>{
        images.push({src:baseUrl+"/listings/image/"+img})
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
                <Col onClick={()=>setOpenViewer(true)} style={{padding:0}} lg={10}>
                    <img className="imageView" src={baseUrl+"/listings/image/"+property?.images[active]} alt="" />
                </Col>
                <Col lg={2}>
                    <Container className="thumbnails">
                        <Row>
                            {
                                property?.images.map((pro, i)=>{
                                    return (
                                        <Col onClick={()=>setActive(i)} key={"img-"+i} style={{padding:0}} lg={12}>
                                            <img src={baseUrl+"/listings/image/"+pro} alt="" />
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
