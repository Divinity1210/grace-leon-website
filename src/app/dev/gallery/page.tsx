import fs from 'fs';
import path from 'path';
import Image from 'next/image';

export default function GalleryPage() {
  const productsDir = path.join(process.cwd(), 'public', 'products');
  let files: string[] = [];
  
  try {
    files = fs.readdirSync(productsDir);
  } catch (e) {
    console.error('Could not read products directory', e);
  }

  const mediaFiles = files.filter(file => /\.(jpg|jpeg|png|webp|mp4|mov)$/i.test(file));

  return (
    <div className="p-8 bg-brand-white text-brand-black min-h-screen">
      <h1 className="text-4xl font-serif mb-8 text-center text-brand-black">Image Gallery Categorization</h1>
      <p className="text-center mb-8 font-sans">Use this gallery to review and categorize the {mediaFiles.length} images for Grace Leon.</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {mediaFiles.map(file => (
          <div key={file} className="flex flex-col border border-gray-200 p-2 rounded">
            {file.endsWith('.mp4') ? (
              <video src={`/products/${file}`} controls className="w-full h-40 object-cover rounded" />
            ) : (
              <div className="relative w-full h-40">
                <Image
                  src={`/products/${file}`}
                  alt={file}
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}
            <p className="mt-2 text-xs truncate" title={file}>{file}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
