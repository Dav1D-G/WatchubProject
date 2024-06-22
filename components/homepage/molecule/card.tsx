import { motion } from "framer-motion"
import Link from "next/link"


interface CardProps {
    image : string,
    id : string
}

export function CardMovie({image , id} : CardProps)
{
    return(
        <>
            <motion.div className="relative overflow-hidden h-[200px] min-w-[200px] rounded-xl flex justify-center items-center">
                <Link href={`/homepage/movie/${id}`} draggable={false}>
                    <img src={image} alt={image} style={{objectFit : 'fill'}} draggable={false}/>
                </Link>
            </motion.div>
        </>
    )
}