import Link from 'next/link'
import fs from 'fs';

export default function Slider() {

    const directoryPath = "public/img/chapters/";
    const docPath = "public/doc/"
    const fileNames = [];
    const files = fs.readdirSync(directoryPath);
    files.forEach(function (file) {
        fileNames.push({
            img: directoryPath.replace('public/', '') + file,
            desc: file.replace('.png', '').split(' - ')[1],
            doc: docPath.replace('public/', '') + file.replace('.png', '.pdf'),
            nmb: parseInt(file.split(' - ')[0])
        });
    });
    fileNames.sort((a, b) => {
        const nameA = a.nmb; // Convert names to uppercase for case-insensitive sorting
        const nameB = b.nmb;
      
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0; // Names are equal
      });

  return (
    <div className="w-full flex flex-row overflow-x-scroll snap-x snap-mandatory"> 
        {fileNames.map((item, index) => (
            <div key={index} className='w-full flex-shrink-0 snap-start'>    
                <img
                key={item.desc}
                alt={item.desc}
                className="w-full max-w-md rounded-full object-cover mb-4 mx-auto"
                height="200"
                src={item.img}
                style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                }}
                width="200"
                />
                <h3 key={item.img} className="text-2xl font-bold">Capítulo {item.nmb}: {item.desc}</h3>
                <Link key={item.doc} className="text-grey-800 hover:underline" target="_blank" href={item.doc}>
                    Leer relato
                </Link>
            </div>
        ))}
    </div>
  )
}