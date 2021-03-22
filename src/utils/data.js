import img1 from '../assets/img/hse1.jpg'
import img2 from '../assets/img/hse2.jpg'
import img3 from '../assets/img/hse3.jpg'
import img4 from '../assets/img/hse4.jpg'
import img5 from '../assets/img/hse5.jpg'

export const baseUrl = 'http://localhost:8080/api'

export const listings = [
    {    
        title:"Garden View Estate",
        price:"120,000",
        desc:"Fugiat exercitation do officia in ex enim elit ut dolore. Irure dolore nisi exercitation eu ipsum Lorem. Nostrud eu minim reprehenderit commodo ad irure adipisicing ea officia.",
        amenities:[],
        images:[img1, img2, img3, img4, img5],
        developer:"Jools Estates",
        location:"Cantoment",
        city:"Accra",
        region:"Greater Accra",
        street:"1234 Siaw St.",
        category:"Condo",
        createdAt:new Date(),
        updatedAt:new Date(),
        updatedBy: {
            name:"Siaw Fish"
        }
    },
    {    
        title:"Holmes Estate",
        price:"150,000",
        desc:"Fugiat exercitation do officia in ex enim elit ut dolore. Irure dolore nisi exercitation eu ipsum Lorem. Nostrud eu minim reprehenderit commodo ad irure adipisicing ea officia.",
        amenities:[],
        images:[img2, img1, img3, img4, img5],
        developer:"Creater Estates",
        location:"Madina",
        city:"Accra",
        region:"Greater Accra",
        street:"1234 Siaw St.",
        category:"Apartment",
        createdAt:new Date(),
        updatedAt:new Date(),
        updatedBy: {
            name:"Siaw Fish"
        }
    },
    {    
        title:"Hillside Court",
        price:"1,000,000",
        desc:"Fugiat exercitation do officia in ex enim elit ut dolore. Irure dolore nisi exercitation eu ipsum Lorem. Nostrud eu minim reprehenderit commodo ad irure adipisicing ea officia.",
        amenities:[],
        images:[img3, img1, img2, img4, img5],
        developer:"Jools Estates",
        location:"Oyarifa",
        city:"Accra",
        region:"Greater Accra",
        street:"1234 Siaw St.",
        category:"House",
        createdAt:new Date(),
        updatedAt:new Date(),
        updatedBy: {
            name:"Siaw Fish"
        }
    },
    {    
        title:"Milton Key Estate",
        price:"320,000",
        desc:"Fugiat exercitation do officia in ex enim elit ut dolore. Irure dolore nisi exercitation eu ipsum Lorem. Nostrud eu minim reprehenderit commodo ad irure adipisicing ea officia.",
        amenities:[],
        images:[img4, img1, img2, img3, img5],
        developer:"Vans Carter Construction",
        location:"East Legon",
        city:"Accra",
        region:"Greater Accra",
        street:"1234 Siaw St.",
        category:"House",
        createdAt:new Date(),
        updatedAt:new Date(),
        updatedBy: {
            name:"Siaw Fish"
        }
    },
    {    
        title:"Hillside Apartments",
        price:"200,000",
        desc:"Fugiat exercitation do officia in ex enim elit ut dolore. Irure dolore nisi exercitation eu ipsum Lorem. Nostrud eu minim reprehenderit commodo ad irure adipisicing ea officia.",
        amenities:[],
        images:[img5, img1, img2, img3, img4],
        developer:"Hilly Developers",
        location:"Kasoa",
        city:"Accra",
        region:"Central Accra",
        street:"1234 Siaw St.",
        category:"Pent House",
        createdAt:new Date(),
        updatedAt:new Date(),
        updatedBy: {
            name:"Siaw Fish"
        }
    }
]

export const users = [
    {
        name:"Siaw Fish",
        phone:"0577077088",
        email:"siaw@mail.com",
        createdAt:new Date(),
        updatedAt:new Date(),
        isVerified:false,
        location:"Achimota"
    },
    {
        name:"Allo Banku",
        phone:"0244998877",
        email:"banku@mail.com",
        createdAt:new Date(),
        updatedAt:new Date(),
        isVerified:false,
        location:"Lapaz"
    },
    {
        name:"Drake Bag",
        phone:"0277077088",
        email:"bag@mail.com",
        createdAt:new Date(),
        updatedAt:new Date(),
        isVerified:false,
        location:"East Legon"
    },
    {
        name:"Megan Pro",
        phone:"0547077088",
        email:"megan@mail.com",
        createdAt:new Date(),
        updatedAt:new Date(),
        isVerified:false,
        location:"Adenta"
    },
]

export const messages = [
    {
        sender:"Kofi Siaw",
        phone:"0577077077",
        email:"siaw@mail.com",
        message:"Esse pariatur fugiat officia proident proident cillum anim adipisicing elit dolore esse proident. Dolore aute voluptate laborum do nisi anim cupidatat reprehenderit fugiat et. Quis veniam esse amet aute excepteur mollit in ea do qui et enim nisi. Dolore in nisi nulla laboris voluptate est labore. Dolor duis fugiat enim amet qui elit sunt ipsum in ad magna eu duis. Nostrud et in do duis commodo mollit proident. Commodo et minim dolor laborum.",
        read:false
    },
    {
        sender:"Kwesi Jay",
        phone:"0277098789",
        email:"jay@mail.com",
        message:"Esse pariatur fugiat officia proident proident cillum anim adipisicing elit dolore esse proident. Dolore aute voluptate laborum do nisi anim cupidatat reprehenderit fugiat et. Quis veniam esse amet aute excepteur mollit in ea do qui et enim nisi. Dolore in nisi nulla laboris voluptate est labore. Dolor duis fugiat enim amet qui elit sunt ipsum in ad magna eu duis. Nostrud et in do duis commodo mollit proident. Commodo et minim dolor laborum.",
        read:true
    }
]