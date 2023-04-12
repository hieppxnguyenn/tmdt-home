import React, { useEffect, useState } from 'react';
import './Home.css';
import Galaxy from './galaxy-s20-wallpaper-note-10.webp';
import MSI from './MSI_BANNER_1080x.webp';
import P2 from './p2.jpg';
import { Card, Carousel } from "antd";
import './Home.css';
import { Layout, Menu } from 'antd';
const { Meta } = Card
const { Header, Content, Footer } = Layout;
const itemHeader = [
    {
        key: 1,
        label: 'HOME',
        path: '/home'
    },
    {
        key: 2,
        label: 'PRODUCT',
        path: '/product'
    }, {
        key: 3,
        label: 'CONTACT',
        path: 'contact'
    },
]
function Home() {
    const [product, setProduct] = useState([]);
    const fetchAPI = async () => {
        const res = await fetch("https://typeshop-server.onrender.com/api/products")
            .then(
                function(response) {
                if (response.status !== 200) {
                    console.log('Lỗi, mã lỗi ' + response);
                    return;
                }
                // parse response data
                response.json().then(data => {
                    setProduct(data)
                })
                }
            )
            .catch(err => {
                console.log('Error :-S', err)
            });
    }
    useEffect(() => {
        fetchAPI()
        console.log(product);
    }, []);
    return (
        <Layout>
            <Header>
                <div className='logo-top'></div>
                <Menu theme="dark" mode="horizontal" items={itemHeader}/>


            </Header>
            <Content>
                <Carousel autoplay >
                    <div>
                        <img className='contentStyle' src={Galaxy} alt="" />
                    </div>
                    <div>
                        <img className='contentStyle' src={MSI} alt="" />
                    </div>
                    <div>
                        <img className='contentStyle' src={P2} alt="" />
                    </div>
                </Carousel>
                <div className="product-wrap">
                    <div className="label-product">
                        <h1>Least Products</h1>
                    </div>
                    <div className="list-product">
                        {
                            product.map((item, index) => {
                                return (
                                    <Card
                                        className='card-product'
                                        key={index}
                                        hoverable
                                        style={{
                                            width: 240,
                                        }}
                                        cover={<img className='img-item' alt="example" src={item.image
                                        } />}
                                    >
                                        <Meta title={item.name}/>
                                        <span>{item.price}$</span>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </Content>
            <Footer>

            </Footer>
        </Layout>
    )
}

export default Home