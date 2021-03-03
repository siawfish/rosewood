import React from 'react'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { FaCalendarCheck, FaRegHandshake } from 'react-icons/fa'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { Col, Card } from "react-bootstrap";

export default function IntroCard({
    search,
    book,
    verify,
    sale
}) {
    const renderSearch = ()=> {
        return(
            <Card.Body>
                <div className="roundBack">
                    <AiOutlineFileSearch />
                </div>
                <Card.Subtitle className="mb-2 bolderText">Search</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        )
    }
    const renderBooking = ()=> {
        return(
            <Card.Body>
                <div className="roundBack fadedBlue">
                    <FaCalendarCheck />
                </div>
                <Card.Subtitle className="mb-2 bolderText">Book</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        )
    }
    const renderVerification = ()=> {
        return(
            <Card.Body>
                <div className="roundBack fadedGreen">
                    <BsFillPersonCheckFill />
                </div>
                <Card.Subtitle className="mb-2 bolderText">Verify</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        )
    }
    const renderSale = ()=> {
        return(
            <Card.Body>
                <div className="roundBack fadedOrange">
                    <FaRegHandshake />
                </div>
                <Card.Subtitle className="mb-2 bolderText">Sale</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        )
    }
    return (
        <Col sm={12} lg={3}>
            <Card className="introCard">
                {
                    search &&
                    renderSearch()
                }
                {
                    book && 
                    renderBooking()
                }
                {
                    verify && 
                    renderVerification()
                }
                {
                    sale && 
                    renderSale()
                }
            </Card>
        </Col>
    )
}
