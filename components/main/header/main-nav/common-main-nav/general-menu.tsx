
import Link from "next/link";


type GeneralMenuProps = {
    data: {
        [key: string]: string[];
    };
};

export default function GeneralMenu ({data}: GeneralMenuProps) {

    return (
        <>
        {Object.entries(data).map(([category, items]) => (
            <div
            className="group relative inline-block text-left"
            key={category}
            >
                <Link 
                href={category} 
                key={`${category}-menu`} 
                className="block px-4 py-2 text-gray-700 hover:text-blue-500 ">
                {category}
                </Link>
                {items.length > 0 && (
                    <div 
                    className="hidden z-50 group-hover:block absolute top-6 left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5" 
                    >
                    {items.map((item) => (
                        <Link 
                        href={item}
                        key={item}
                        className="block top-10 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                        >{item}</Link>
                        ))}
                    </div>
                )}
                    
            </div>   
           
        ))}
       </>
    )
}