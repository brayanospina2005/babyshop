import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonios</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>Lo que nuestros <span className=' text-pink-500'>Clientes</span> Dicen</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/foto-gratis/primer-plano-amistoso-aspecto-elegante-joven-mujer-afroamericana-cabello-lacio-recto-oscuro-mirada-feliz-alegre-posando_344912-1016.jpg?w=1060&t=st=1699891672~exp=1699892272~hmac=0e4ec42ebfd125b1e720c671820d284023f2ea74b0c6a853be6bbe1702e448cc" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Como madre primeriza, encontrar productos de calidad para mi bebé fue una prioridad. Gracias a esta tienda en línea, pude acceder a una amplia gama de artículos seguros y confiables para mi recién nacido. La atención al cliente fue excepcional, brindándome la orientación necesaria para tomar decisiones informadas. ¡Altamente recomendado para padres novatos como yo!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Erika Valencia</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Madre</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg?w=1060&t=st=1699891847~exp=1699892447~hmac=6a80018991324c91c6e378fc7dcafff6149fe3c28454e771c0fd8ad71d74d88b" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Como padre ocupado, la comodidad y la calidad son esenciales al elegir productos para mi bebé. Esta tienda en línea no solo ofreció una experiencia de compra sin complicaciones, sino que también proporcionó productos duraderos que se adaptaron perfectamente a nuestras necesidades. Desde la selección hasta la entrega, el servicio fue impecable. ¡Definitivamente mi elección número uno para artículos de bebé!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Miguel Suarez</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Padre</p>
                            </div>
                        </div>
                        
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/foto-gratis/familia-tiro-medio-tableta_23-2148936756.jpg?w=996&t=st=1699892008~exp=1699892608~hmac=5411a690d5b5d0c87abcd47b26831cb185455aa27a595c55a0f903fad7533e4a" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Esta tienda ha sido nuestra salvación. Con un bebé en crecimiento, hemos regresado una y otra vez por su variedad de productos confiables. La calidad constante y la asistencia personalizada nos han hecho leales clientes. No solo encontramos lo que necesitamos, sino que también nos sentimos apoyados por un equipo amable y dispuesto a ayudar en todo momento. ¡Totalmente recomendado para familias en todas las etapas de crianza!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Familia</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Familia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial