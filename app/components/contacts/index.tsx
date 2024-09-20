import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Section from "../elements/section";
import ContactForm from "./contactform";

const Contacts = () => {
    return (
        <div className="h-full flex w-full text-white text-wrap bg-gray-800" id="contacts">

            <div className="sm:items-start container w-full flex-col flex mx-auto px-4 m-4 h-full">

            <Section title="Contacts" className="section-heading-contacts" />

            <ContactForm />

            </div>
        </div>
    );
  };
  export default Contacts;