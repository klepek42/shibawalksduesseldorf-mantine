import Image from 'next/image';

interface Props {
    images: string[]
}

export const ImagesSection = ({images}:Props) => {
    return (<div className='flex flex-row'>
        {images.map((image, index) =>
            <Image
                className='mr-4'
                src={`/images/${image}`}
                height={108}
                width={192}
                alt={`Shiba ${index + 1}`}
        />)}
    </div>)
}