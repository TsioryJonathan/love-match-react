function LoveLoader({className} : {className?: string}) {
  return (
    <div className={'flex flex-col items-center justify-center gap-5' + ' ' + className}>
        <img src="../../public/heart.png" className='w-10 h-10 animate-spin' alt="Heart" />
        <p className={`text-lg text-pink-500 font-semibold text-wrap`}>Calculating your love compatibility...</p>
    </div>
  )
}

export default LoveLoader