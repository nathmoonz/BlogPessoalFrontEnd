import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react"


function Footer() {
    return (
        <>
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">Blog Pessoal Genaration | &copy;</p>
                    <p className="text-lg">Acesse nossas redes sociais</p>
                    <div className="flex">
                        <LinkedinLogo size={32} weight="bold"/>
                        <InstagramLogo size={32} weight="bold"/>
                        <FacebookLogo size={32} weight="bold"/>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer