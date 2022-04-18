import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div style={{height: ' calc(100vh - 200px)'}} className='container mt-5'>
            <div className="row">
                <div className="col-lg-4">
                    <Card>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/key-lock-password-security-privacy-protection-graphic_53876-122570.jpg?t=st=1650236944~exp=1650237544~hmac=17bd7f535752a9abb6ecd94ae97d76e206ea0adcf6a843e2bd693d04d01612f4&w=740" />
                        <Card.Body>
                            <Card.Title>Difference between authorization and authentication</Card.Title>
                            <Card.Text>
                                <p>
                                    <span className='fw-bold'>Authorization</span> <br />
                                    Authorization ইউজার এর কোন কোন জায়গায়  এক্সেস আছে তা দেখে। Authorization ব্যবহারকারীর কোথায় কোথায় অনুমিতি দিয়েছেন তা চেক করে।
                                    Authorization Authentication এর পরে ঘটে।
                                </p>
                                <p> <span className='fw-bold'>Authentication</span> <br />
                                    Authentication ইউজার এর আইডেন্টিটিকরে করে। Authentication এর কাজ হলো ইউজার কে চিহ্নিত করা। Authentication Authorization হওয়ার আগে হয়।</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card>
                        <Card.Img variant="top" src="https://i.pinimg.com/564x/09/63/a6/0963a6051212c3268e25d640c0410583.jpg" />
                        <Card.Body>
                            <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                            <Card.Text>
                                Firebase হলো একটি গুগল প্ল্যাটফরম, যেটা ধারা মোবাইল এবং ওয়েব এপ্লিকেশন  তৈরি করা যায়। Firebase ব্যাবহারের অন্যতম কারণ হলো সহজেই এপ্লিকেশন তৈরি করা যায়, হোস্ট করা যায়, authentication করা যায়।
                                Firebase ছাড়াও authentication এর আরও মাধ্যম রয়েছে। যেমনঃ Backendless, kuzzle, kinvey, Back4app ইত্যাদি । 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card>
                        <Card.Img variant="top" src="https://i.pinimg.com/564x/09/63/a6/0963a6051212c3268e25d640c0410583.jpg" />
                        <Card.Body>
                            <Card.Title>What other services does firebase provide other than authentication?</Card.Title>
                            <Card.Text>
                            Authentication ছাড়াও ফায়ারবেস অনেক ধরনের সার্ভিস দিয়ে থাকে, যেমনঃ
                            Hosting, Realtime Database, Cloud Storage, Google Analytics, Cloud Messaging, Dynamic Links, Remote Config, Cloud Firestore, Cloud Functions। 
                                
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Blogs;