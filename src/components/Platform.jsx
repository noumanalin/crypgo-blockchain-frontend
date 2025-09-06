

const Platform = () => {
    return (
        <article aria-label="crypgo platfrom" className="w-full my-15 flex flex-col md:flex-row gap-4 items-center justify-between p-3 md:px-10 md:py-12 rounded-4xl bg-gray-800">
            <section>
                <h1 className="text-4xl mb-5">Powered by the Cryp<span className="text-tertiary ">go</span> Platform</h1>
                <p className="text-lg text-accent">Our products empower people to have safer and more <br className="hidden md:block" />trustworthy experiences.</p>
            </section>

            <button
                className=" px-6 py-3 bg-[var(--tertiary-color)] text-gray-900 rounded-md hover:bg-transparent 
                hover:text-white border border-[var(--tertiary-color)] transition-colors duration-300 font-medium"
            >
                Get Started
            </button>
        </article>
    )
}

export default Platform