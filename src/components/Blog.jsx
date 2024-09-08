import React from 'react'

const Blog = () => {
    return (
        <div class="flex items-center bg-gray-900 mx-3">
            <div
                class="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-[#4a1463] bg-clip-border text-gray-700 shadow-lg">
                <div class="relative m-0 overflow-hidden text-white bg-transparent rounded-none shadow-none bg-clip-border">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                        alt="ui/ux review check" class="w-full h-auto" />
                </div>
                <div class="p-6">
                    <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-purple-300">
                        UI/UX Review Check
                    </h4>
                    <p class="block mt-3 font-sans text-base antialiased font-normal leading-relaxed text-white">
                        Because it&apos;s about motivating the doers. Because I&apos;m here to
                        follow my dreams and inspire others.
                    </p>
                </div>
                <div class="p-6 pt-0 flex justify-start ">
                    <button
                        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-purple-700 text-white shadow-md hover:bg-purple-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button">
                        Read More
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Blog