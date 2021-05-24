import React from 'react'
import { Navbar, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import { ImPhone } from 'react-icons/im'

export default function Nav() {
    const history = useHistory()
    const location = useLocation()
    const [search, setSearch] = React.useState("")

    const gotoProperties = ()=> {
        history.push('/properties')
    }

    const gotoAboutus = ()=> {
        history.push('/aboutus')
    }

    const gotoContactus = ()=> {
        history.push('/contactus')
    }

    const gotoHome = ()=> {
        history.push('/')
    }

    const onTextInput = (e)=> {
        setSearch(e.target.value)
    }

    const onSearch = ()=> {
        history.push(`/properties/${search}`)
    }

    const path = location.pathname

    return (
        <Navbar collapseOnSelect expand="lg" className={path.match('/admin')?"inAdmin":null} style={path.match('/admin')&&{backgroundColor:"#000"}}>
            <Navbar.Brand href="/">
                <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={path.match('/home')&&{color:'#5A995A'}} onClick={gotoHome}>
                    Home
                </Navbar.Text>
                <Navbar.Text style={path.match('/properties')&&{color:'#5A995A'}} onClick={gotoProperties}>
                    Properties
                </Navbar.Text>
                <Navbar.Text style={path.match('/aboutus')&&{color:'#5A995A'}} onClick={gotoAboutus}>
                    About Us
                </Navbar.Text>
                <Navbar.Text style={path.match('/contactus')&&{color:'#5A995A'}} onClick={gotoContactus}>
                    Contact Us
                </Navbar.Text>
                <Navbar.Text>
                    <ImPhone /> : <span>+233 24 793 8888 / +44 743 758 6493</span>
                </Navbar.Text>
                <div className="searchForm">
                    <input onChange={onTextInput} placeholder="search for locality, landmark or project" />
                    <Button onClick={onSearch} disabled={search.length<3} className="searchButton">&#128269; Search</Button>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}
