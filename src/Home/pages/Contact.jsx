import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { ICON_HELPER } from "../../helper/iconHelper";

const Contact = () => {
  return (
    <section id="contact">
      <div className="pb-10  pt-10 ">
        <div className="px-[8vw]  grid grid-cols-1 md:grid-cols-2    items-center bg-[#33467f] md:min-h-[800px]" style={{ backgroundImage: "url('https://html.tonatheme.com/2024/intelytech/images/background/banner-01.png')" }}>
          <div className="space-y-8 ">
            <h1 className="md:text-4xl font-bold text-white  font-secondary">We offer end-to-end robotics education solutions</h1>
            <p className="md:text-lg text-gray-300 font-secondary">Learn the foundations of robotics, from mechanical design to intelligent control systems, all in one streamlined program.</p>

            <div className=" ">
              <p className="md:text-xl text-gray-300 font-semibold p-5 border-t-2 border-white border-b-2 font-secondary">Connect with mentors and peers on cutting-edge developments</p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300 text-base">
                <span className="text-green-400 mr-2 text-xl">
                  <ICON_HELPER.HAND_IMAGE />
                </span>
                Build, program, and innovate with real-world robotics projects
              </p>
              <p className="flex items-center text-gray-300 text-base">
                <span className="text-green-400 mr-2 text-xl">
                  <ICON_HELPER.HAND_IMAGE />
                </span>
                Master AI integration, sensors, automation, and machine learning
              </p>
            </div>
          </div>

          <div className="bg-white  md:mt-[100px] py-5 px-[50px]  shadow-md max-w-[500px] mx-auto">
            <div className="space-y-2 mb-4">
              <p className="text-blue-600 text-xs font-medium">Blandit Vitae Sit Ut Eu Nullam Odio Ipsum</p>
              <h2 className="md:text-lg font-semibold">Get a Free and Instant Consultation</h2>
            </div>
            <div>
              <Form
                layout="vertical"
                className="space-y-2"
                onFinish={(values) => {
                  const message = `Hi, I'm ${values.name},\nGrade: ${values.grade}\nSchool: ${values.school}\nMobile: ${values.mobile}\nEmail: ${values.email}\nSubject: ${values.subject}\n\n${values.message}`;
                  const url = `https://wa.me/919789583097?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}
              >
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                  <Form.Item label={<span className="text-sm font-medium">Enter Name</span>} className="mb-0" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
                    <Input placeholder="Enter your name" className="h-[36px] text-sm" />
                  </Form.Item>
                  <Form.Item label={<span className="text-sm font-medium">Enter Email</span>} className="mb-0" name="email" rules={[{ required: true, message: "Please enter your email" }]}>
                    <Input placeholder="Enter your email" className="h-[36px] text-sm" />
                  </Form.Item>
                </div>

                {/* Mobile and Grade */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                  <Form.Item label={<span className="text-sm font-medium">Mobile Number</span>} className="mb-0" name="mobile" rules={[{ required: true, message: "Please enter your mobile number" }]}>
                    <Input placeholder="Enter your mobile number" className="h-[36px] text-sm" />
                  </Form.Item>
                  <Form.Item label={<span className="text-sm font-medium">Grade</span>} className="mb-0" name="grade" rules={[{ required: true, message: "Please enter your grade" }]}>
                    <Input placeholder="Enter your grade" className="h-[36px] text-sm" />
                  </Form.Item>
                </div>

                {/* School Name */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                  <Form.Item label={<span className="text-sm font-medium">School Name</span>} className="mb-0" name="school" rules={[{ required: true, message: "Please enter your school name" }]}>
                    <Input placeholder="Enter your school name" className="h-[36px] text-sm" />
                  </Form.Item>

                  {/* Subject */}
                  <Form.Item label={<span className="text-sm font-medium">Subject</span>} className="mb-0" name="subject" rules={[{ required: true, message: "Please enter the subject" }]}>
                    <Input placeholder="Select a subject" className="h-[36px] text-sm" />
                  </Form.Item>
                </div>

                {/* Message */}
                <Form.Item label={<span className="text-sm font-medium">Your Message</span>} className="mb-0" name="message" rules={[{ required: true, message: "Please write your message" }]}>
                  <TextArea rows={3} placeholder="Write your message here" className="text-sm" />
                </Form.Item>

                {/* WhatsApp Submit Button */}
                <Form.Item>
                  <button type="submit" className="w-full bg-[#54B685] text-white py-2 text-sm rounded hover:bg-[#425DAC] transition">
                    Send Message on WhatsApp
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
