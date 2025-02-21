// app/blog/page.jsx
"use client";
import '@ant-design/v5-patch-for-react-19';
import React, { useEffect, useState } from 'react';
import CardParagraph from './cardgraph';
import LayoutPage from '../Layout';
import LongPageInScrollContainer from '../Scroll';
import { Button, Form, Input, Modal } from 'antd';
import { addArticleAPI, getArticlesAPI } from '@/apis';
// import LongPageInScrollContainer from '../Scroll';
// import Scrollbar from 'react-scrollbar'
// import PerfectScrollbar from 'react-perfect-scrollbar'
// import 'perfect-scrollbar/css/perfect-scrollbar.css'

const BlogPage = () => {
    const [addArticleVisible, setAddArticleVisible] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [articleList, setArticleList] = useState([])
    useEffect(()=>{
        setAuthor('张三四五')
    }, [])
    const getArticle = async () => {
        const response = await getArticlesAPI()
        setArticleList(response)
        console.log(response);
    }
    useEffect(()=>{
        getArticle()
    }, [])
    const addAtricle = () => {
        setAddArticleVisible(true)
    }
    const handleOK = async () => {
        setAddArticleVisible(false)
        const submitData = {
            "title" : title,
            "content" : content,
            "author" : author
        }
        const jsonData = JSON.stringify(submitData)
        // request
        const response = await addArticleAPI(jsonData)
        console.log(response.message);
        getArticle()
        setTitle('')
        setContent('')
        // setAuthor('')
    }
    const handleCancel = () => {
        setAddArticleVisible(false)
        setTitle('')
        setContent('')
        // setAuthor('')
    }
    return (
        
        <LayoutPage>
            <div className="container mx-auto p-8">
                <Button onClick={addAtricle}>添加文章</Button>
                <Modal title="Basic Modal" open={addArticleVisible} onOk={handleOK} onCancel={handleCancel}>
                    标题:<Input value={title} onChange={(e)=>setTitle(e.target.value)} />
                    内容:<Input value={content} onChange={(e)=>setContent(e.target.value)} />
                </Modal>
                <h1 className="text-3xl font-bold mb-4">这是我想说的话</h1>
                <LongPageInScrollContainer>
                    <div className="prose max-w-none space-y-4">
                        {articleList
                        .slice() // 创建一个数组副本，避免修改原始数组
                        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // 按创建时间降序排序
                        .map((item, index) => (
                                <CardParagraph key={index}>
                                    <div
                                        key={index}
                                        className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                                    >
                                        <h2 className="text-xl font-bold mb-2">标题：{item.title}</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">内容：{item.content}</p>
                                        <p className="text-sm text-gray-500">创建时间：{item.created_at}</p>
                                        <p className="text-sm text-gray-500">作者：{item.author}</p>
                                    </div>
                                </CardParagraph>
                            ))}
                    </div>
                </LongPageInScrollContainer>
                    {/* <LongPageInScrollContainer>
                        <div className="prose max-w-none space-y-4">
                            {articleList.map((item, index) => (
                                <CardParagraph key={index}>
                                <div
                                    key={index}
                                    className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <h2 className="text-xl font-bold mb-2">标题：{item.title}</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">内容：{item.content}</p>
                                    <p className="text-sm text-gray-500">创建时间：{item.created_at}</p>
                                    <p className="text-sm text-gray-500">作者：{item.author}</p>
                                </div>
                                </CardParagraph>
                            ))
                            
                            }
                        </div>
                    </LongPageInScrollContainer> */}
            </div>
        </LayoutPage>
        
    );
};

export default BlogPage;