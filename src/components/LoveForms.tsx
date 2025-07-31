import { useState, type FormEvent } from 'react';
import LoveLoader from './LoveLoader';

export default function LoveForms() {
  const [firstName, setFirstName] = useState<string>('');
  const [secondName, setSecondName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setFirstName('');
      setSecondName('');
    },3000)
  };
  return (
    <form action="" className="flex flex-col bg-white px-10 py-5 rounded-2xl shadow-2xl shadow-pink-200 h-[500px] w-[450px]">
      <div className="flex flex-col items-center justify-center gap-2 mb-5 w-full">
        <img src="/heart.png" alt="Heart image" width={80} />
        <h2 className="text-3xl">Love Match</h2>
        <p className="text-1xl text-gray-700">Découvrez votre compatibilité</p>
      </div>
      {isLoading ? <LoveLoader className='w-full h-full'/> : (
        <div className="flex flex-col justify-center items-center gap-5 w-full">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Premier prénom"
          className="bg-gray-100 p-4 rounded outline-pink-200 px-10 w-full"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <img src="/heart.png" alt="Heart image" width={32} className='animate-pulse'/>

        <input
          type="text"
          name="secondName"
          id="secondName"
          placeholder="Deuxième prénom"
          className="bg-gray-100 p-4 rounded outline-pink-200 px-10 w-full"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
        <button className="bg-pink-400 text-white rounded-md w-full mt-10 px-5 py-2 cursor-pointer" onClick={(e) => handleSubmit(e)}
          type='button'>Tester la compatibilité</button>
      </div>)}
    </form>
  );
}
