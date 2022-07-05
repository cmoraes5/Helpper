// ? ==> Componente é uma função que retorna html/JSX/TSX
//! ==> Os componentes precisam ter os mesmos nomes dos arquivos e 
//! precisam ter a primeira letra maiuscula, para não confundir as tags do html

//! ==> O react espera dentro do return um úmico componente que envolva diversos componentes

//? ==> No react atributos html são propiedades
//? ==> Apesar de estarmos usando tailwindcss, 
//? ainda podemos utilizar o css normal, acesse o arquivo global.css crie a classe com className aq
//? ==> Não precisamos ficar retritos as cores do tailwind, exemplo: bg-[#87faba]

//! ==> Estado -> o react vai observar essa var, elá servirá para mudar o estado de um componente
//! e quando o gatilho for acionado, o react vai reescrever o componente com o estado novo

//!   const [isWidgetOpen, setIsWidgetOpen] = useState(false)
//!   function toggleWidgetVisibility() { setIsWidgetOpen(!isWidgetOpen) }

//? ==> 29 - { isWidgetOpen ? <p>Hello World</p> : null } podemos reduzir pois, sempre que temos 
//? o then e só temos o nulo, podemos trocar par o &&, só executará a segunda parte da intrução se a rpimeira parte for um valor verdadeiro

// import { useState } from 'react'; ==> Não vamos mais precisar disso pois o headless fará o rtabalho sozinho


import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget() {
    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            <Popover.Panel>
                <WidgetForm />
            </Popover.Panel>

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6" />

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}