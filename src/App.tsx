
import third from './assets/third.png'
import four from './assets/four.png'
import fifth from './assets/fifth.png'

import Header from './components/Header.tsx'
import ImageAndText from './components/ImageAndText.tsx'

import './styles/index.css'

function App(){
    return(
        <>
            <Header />

            <ImageAndText direction={'L'} imageComponent={third} title={'Foco na otimização de processos'} description={''} listMarcation={['Organize seus casos: Tenha todos os seus processos em um só lugar, com informações completas e atualizadas.','Automatize tarefas: Elimine tarefas repetitivas e ganhe mais tempo para atender seus clientes.','Melhore a comunicação: Facilite a comunicação com seus clientes e equipe, agilizando o processo.','Gere relatórios personalizados: Tenha insights valiosos sobre o desempenho do seu escritório.']} background={true} />

            <ImageAndText direction={'R'} imageComponent={four} title={'Proteja seus dados e garanta a conformidade com as normas jurídicas.'} description={''} listMarcation={['Segurança de dados: Proteja os dados dos seus clientes com as mais modernas tecnologias de segurança.', 'Conformidade legal: Garanta que seu escritório esteja em conformidade com as normas e regulamentações.', 'Auditoria: Gere relatórios detalhados para acompanhar o cumprimento das normas e regulamentações.', 'Backup: Tenha a garantia de que seus dados estão seguros com nosso sistema de backup.']} background={false} />

            <ImageAndText direction={'R'} imageComponent={fifth} title={'Agenda e prontuário de seus pacientes.'} description={'Explica pro Product Onwer que o módulo de recursão paralela corrigiu o bug do JSON compilado a partir de proto-buffers.'} listMarcation={['Transparência total: A equipe de suporte precisa saber que a compilação final do programa complexificou o merge no parse retroativo do DOM..', 'Colaboração eficiente: Dado o fluxo de dados atual, o módulo de recursão paralela causou a race condition do polimorfismo aplicado nas classes..']} background={true} />
        </>
    )


}

export default App

