const Content = () => {
    return <div className="flex flex-col">
        <div className="content reclaim flex justify-between">

            <p className=" text-slate-400 text-3xl">Reclaim your life &</p>
            <p className=" one text-4xl font-bold">1</p>

        </div>

        <p className="energy self-center font-bold">ENERGY</p>
        <div className="content sign flex justify-between">
            <button className="button text-xl text-white bg-black self-center py-2 px-16 rounded-xl">
                Sign me up
            </button>
            <div className="flex flex-col w-72">
                <p className="text-4xl font-semibold mb-4">Your <span className="text-green-500">healthy</span> life starts here with us</p>
                <p className="desc text-sm ">A family oriented company forwarded with the purpose of giving your family access to clean, energetic products where you are on the go.</p>
            </div>
        </div>
    </div >
}

export default Content