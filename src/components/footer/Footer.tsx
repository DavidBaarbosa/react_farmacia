import { FacebookLogoIcon, InstagramLogoIcon } from '@phosphor-icons/react'

function Footer() {
    
    let data = new Date().getFullYear()

    return (
        <>
           <div className="bg-red-700 text-white py-4">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Farmácia Popular | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.instagram.com/seu_usuario" target="_blank">
                            <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.facebook.com/seu_usuario" target="_blank">
                            <FacebookLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
   </>
    )
}

export default Footer