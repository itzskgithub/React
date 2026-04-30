import React from 'react'

function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqVYJORLYdYRbVKw_4RHHklbpVKC7AL7hNQ&s"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            <p>
                                React enables developers to create dynamic interfaces using reusable components.
                                With efficient state management and virtual DOM updates, applications remain fast and responsive.
                            </p>
                        </p>
                        <p className="mt-4 text-gray-600">
                            <p>
                                React simplifies the process of building interactive user interfaces by breaking them into reusable components.
                                It allows developers to manage state efficiently and update the UI without reloading the entire page.
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About