import React from "react";
import Navbar from "../Components/Navbar";
import Leader from "../Components/Leaders";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="aboutcontent">
          <h1>About us</h1>
          <p>
            Welcome to Anisha's bookstore, your go-to destination for all things
            books! At this bookstore, we are passionate about literature and
            believe in the power of books to inspire, educate, and entertain.
            Whether you're a bookworm, a casual reader, or just looking for the
            perfect gift, we have something for everyone. Our bookstore offers a
            wide selection of genres, from bestsellers and classics to niche and
            independent titles. We pride ourselves on curating a diverse
            collection that reflects the interests and tastes of our community.
            But we're more than just a bookstore—we're a hub for book lovers.
            Our cozy atmosphere, knowledgeable staff, and regular events make a
            place where readers can connect, discover new authors, and share
            their love of reading. We are committed to providing excellent
            customer service and helping you find the perfect book for any
            occasion. Whether you visit us in person or shop online, we're here
            to help you explore the wonderful world of literature.
          </p>
        </div>
        <div className="supporters">
          {Leader.map((a) => (
            <div className="card">
              <img src={a.img}className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  {a.name}<br/>
                  <strong>{a.post}</strong><br/>
                  {a.des}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
