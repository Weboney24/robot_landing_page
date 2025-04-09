import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { ICON_HELPER } from "../../helper/iconHelper";

const Contact = () => {
  return (
    <section id="contact">
      <div className="pb-10  pt-10 ">
        <div className="px-[8vw]  grid grid-cols-1 md:grid-cols-2    items-center bg-[#425DAC] min-h-screen" style={{ backgroundImage: "url('https://html.tonatheme.com/2024/intelytech/images/background/banner-01.png')" }}>
          <div className="space-y-6 mt-14">
            <h1 className="text-4xl font-bold text-[#54B685]  font-secondary">We offer end-to-end AI solutions for your business needs</h1>
            <p className="text-lg text-gray-300 font-secondary">Eu pellentesque duis consectetur sem amet massa. Vulputate magna convallis malesuada in sagittis. Scelerisque pulvinar mollis enim sed ornare felis lacinia aliquam.</p>

            <div className=" ">
              <p className="text-xl text-gray-300 font-semibold p-5 border-t-2 border-white border-b-2 font-secondary">Connect with other AI enthusiasts and experts for a positive impact on the world</p>
            </div>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300 text-base">
                <span className="text-green-400 mr-2 text-xl">
                  <ICON_HELPER.HAND_IMAGE />
                </span>
                Arcu in maecenas cursus magna sollicitudin.
              </p>
              <p className="flex items-center text-gray-300 text-base">
                <span className="text-green-400 mr-2 text-xl">
                  <ICON_HELPER.HAND_IMAGE />
                </span>
                Tellus id quisque volutpat pulvinar est adipiscing.
              </p>
            </div>
          </div>

          <div className="bg-white  mt-[100px] py-5 px-[50px]  shadow-md max-w-[500px] mx-auto">
            <div className="space-y-2 mb-4">
              <p className="text-blue-600 text-xs font-medium">Blandit Vitae Sit Ut Eu Nullam Odio Ipsum</p>
              <h2 className="text-lg font-semibold">Get a Free and Instant Consultation</h2>
            </div>
            <div>
              <Form layout="vertical" className="space-y-2">
                {/* Name and Email */}
                <div className="grid grid-cols-2 gap-3">
                  <Form.Item label={<span className="text-sm font-medium">Enter Name</span>} className="mb-0">
                    <Input placeholder="Enter your name" className="h-[36px] text-sm" />
                  </Form.Item>
                  <Form.Item label={<span className="text-sm font-medium">Enter Email</span>} className="mb-0">
                    <Input placeholder="Enter your email" className="h-[36px] text-sm" />
                  </Form.Item>
                </div>

                {/* Subject */}
                <Form.Item label={<span className="text-sm font-medium">Select Subject</span>} className="mb-0">
                  <Input placeholder="Select a subject" className="h-[36px] text-sm" />
                </Form.Item>

                {/* Message */}
                <Form.Item label={<span className="text-sm font-medium">Your Message</span>} className="mb-0">
                  <TextArea rows={3} placeholder="Write your message here" className="text-sm" />
                </Form.Item>

                {/* Submit Button */}
                <button className="w-full bg-[#54B685] text-white py-2 text-sm rounded hover:bg-[#425DAC] transition">Send Message</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
