import Image from 'next/image'

import {
  Button,
  Flex,
  Text,
  Stack,
  Container,
  List,
  ListItem,
  Grid,
  GridItem,
  Box,
  Icon
} from '@chakra-ui/react'

import { Link } from 'react-scroll'

import { BiLayout, BiGrid, BiCodeAlt, BiRocket } from 'react-icons/bi'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

import { Fade } from 'react-reveal'

import faqData from '@utils/faqData.json'

import { Layout } from '@components/Layout'
import { StepsRow } from '@components/StepsRow'
import { StackBox } from '@components/StackBox'
import { ThemeBox } from '@components/ThemeBox'
import { FaqCollapse } from '@components/FaqCollapse'
import { QuoteBox } from '@components/QuoteBox'
import { SponsorBox } from '@components/SponsorBox'
import { TeamBox } from '@components/TeamBox'

const IndexPage = () => {
  return (
    <Layout>
      <Flex
        as="header"
        bgGradient="linear(to-br, purple.600, blue.600)"
        w="100%"
        h="100%"
        position="relative"
      >
        <Box
          position="absolute"
          maxH="100%"
          overflow="hidden"
          opacity="0.2"
          zIndex={1}
          bg="url(/assets/images/fundo.jpg) bottom"
          height="100%"
          width="100%"
        />

        <Container maxW="container.xl" centerContent zIndex={2}>
          <Flex direction="column" w="100%">
            <Flex
              as="nav"
              justifyContent={{
                base: 'center',
                md: 'space-between'
              }}
              alignItems="center"
              py="8"
            >
              <Image
                src="/assets/images/logo.png"
                width={122}
                height={49}
                alt="Logo image"
              />

              <List
                styleType="none"
                display={{
                  base: 'none',
                  md: 'flex'
                }}
                alignItems="center"
                gridGap="8"
              >
                <Link to="aceleracao" smooth={true} offset={50} duration={500}>
                  <ListItem
                    opacity="0.8"
                    fontWeight="medium"
                    cursor="pointer"
                    _hover={{
                      opacity: '1'
                    }}
                  >
                    A acelera????o
                  </ListItem>
                </Link>
                <Link to="sobre" smooth={true} offset={50} duration={500}>
                  <ListItem
                    opacity="0.8"
                    fontWeight="medium"
                    cursor="pointer"
                    _hover={{
                      opacity: '1'
                    }}
                  >
                    Sobre
                  </ListItem>
                </Link>
                <Link to="etapas" smooth={true} offset={50} duration={500}>
                  <ListItem
                    opacity="0.8"
                    fontWeight="medium"
                    cursor="pointer"
                    _hover={{
                      opacity: '1'
                    }}
                  >
                    Etapas
                  </ListItem>
                </Link>
                <Link to="time" smooth={true} offset={50} duration={500}>
                  <ListItem
                    opacity="0.8"
                    fontWeight="medium"
                    cursor="pointer"
                    _hover={{
                      opacity: '1'
                    }}
                  >
                    Nosso time
                  </ListItem>
                </Link>
                <Link to="faq" smooth={true} offset={50} duration={500}>
                  <ListItem
                    opacity="0.8"
                    fontWeight="medium"
                    cursor="pointer"
                    _hover={{
                      opacity: '1'
                    }}
                  >
                    FAQ
                  </ListItem>
                </Link>
                <Link to="parceiros" smooth={true} offset={50} duration={500}>
                  <ListItem
                    opacity="0.8"
                    fontWeight="medium"
                    cursor="pointer"
                    _hover={{
                      opacity: '1'
                    }}
                  >
                    Empresas parceiras
                  </ListItem>
                </Link>
              </List>

              <Button
                as="a"
                href="https://forms.gle/2qGhbKHdheS4cmpSA"
                target="_blank"
                rel="noopener noreferrer"
                display={{
                  base: 'none',
                  md: 'flex'
                }}
              >
                <Text>Come??ar agora</Text>
              </Button>
            </Flex>

            <Flex
              width="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gridGap="8"
              mb="16"
            >
              <Stack spacing={3}>
                <Fade bottom>
                  <Text
                    fontSize={{
                      base: '4xl',
                      md: '5xl'
                    }}
                    maxW={{
                      base: 'xs',
                      md: 'lg'
                    }}
                    mx="auto"
                    textAlign="center"
                    fontWeight="black"
                    lineHeight="short"
                  >
                    Evolua na carreira como desenvolvedor
                  </Text>
                </Fade>
                <Fade bottom>
                  <Text
                    textAlign="center"
                    fontSize={{
                      base: 'lg',
                      md: 'xl'
                    }}
                    maxW={{
                      base: 'auto',
                      md: 'lg'
                    }}
                    opacity="0.8"
                  >
                    Realize sua incri????o e garanta o pr??ximo passo para a
                    evolu????o na carreira
                  </Text>
                </Fade>
              </Stack>

              <Fade bottom>
                <Button
                  width="fit-content"
                  bgColor="gray.800"
                  px="8"
                  py={{
                    base: '7',
                    md: '8'
                  }}
                  fontSize={{
                    base: 'md',
                    md: 'lg'
                  }}
                  _hover={{
                    bgColor: 'gray.700'
                  }}
                  _active={{
                    bgColor: 'gray.600'
                  }}
                  as="a"
                  href="https://forms.gle/2qGhbKHdheS4cmpSA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inscreva-se agora
                </Button>
              </Fade>
            </Flex>

            <Image
              src="/assets/images/code-preview.png"
              width={1070}
              height={383}
              alt="Code preview"
              objectFit="contain"
              quality={100}
            />
          </Flex>
        </Container>
      </Flex>
      <Flex as="main" width="100%" direction="column">
        <Flex id="aceleracao" as="section" py="20" width="100%">
          <Container maxW="container.xl" centerContent>
            <Flex direction="column" gridGap="12" width="100%">
              <Stack>
                <Text
                  fontSize={{
                    base: '3xl',
                    md: '4xl'
                  }}
                  fontWeight="bold"
                  textAlign="center"
                >
                  A acelera????o
                </Text>
                <Text
                  textAlign="center"
                  color="gray.400"
                  fontSize={{
                    base: 'md',
                    md: 'lg'
                  }}
                >
                  Durante 4 meses, voc?? obter?? acesso a esses conte??dos:
                </Text>
              </Stack>

              <Grid
                gridTemplateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(4, 1fr)'
                }}
                gap="6"
              >
                <GridItem>
                  <Fade bottom>
                    <StackBox
                      iconElement={BiLayout}
                      stackTitle="Aulas e workshops"
                      stackDescription="Conte??dos variados de programa????o, boas pr??ticas em programa????o, lideran??a, testes de software e outros para alinhar voc?? com os objetivos do programa"
                    />
                  </Fade>
                </GridItem>
                <GridItem>
                  <Fade bottom delay={100}>
                    <StackBox
                      iconElement={BiGrid}
                      stackTitle="Mentoriais individuais"
                      stackDescription="Para receber aquele empurr??o, obter dicas de como ultrapassar seus limites e acelerar seu processo de evolu????o."
                    />
                  </Fade>
                </GridItem>
                <GridItem>
                  <Fade bottom delay={150}>
                    <StackBox
                      iconElement={BiCodeAlt}
                      stackTitle="Desafios semanais"
                      stackDescription="Para colocar em pr??tica, por meio de atividades de programa????o, todo os conhecimentos abordados durante as aulas."
                    />
                  </Fade>
                </GridItem>
                <GridItem>
                  <Fade bottom delay={200}>
                    <StackBox
                      iconElement={BiRocket}
                      stackTitle="Prepara????o t??cnica e oportunidade no mercado"
                      stackDescription="A etapa que conecta voc?? ao mercado de trabalho fornece todas os meios necess??rios para sua evolu????o profissional."
                    />
                  </Fade>
                </GridItem>
              </Grid>
            </Flex>
          </Container>
        </Flex>
        <Flex id="sobre" as="section" py="20" width="100%" bg="gray.800">
          <Container maxW="container.xl" centerContent>
            <Flex direction="column" gridGap="12" width="100%">
              <Text
                fontSize={{
                  base: '3xl',
                  md: '4xl'
                }}
                mx="auto"
                fontWeight="bold"
                textAlign="center"
                maxW={{
                  base: 'auto',
                  md: 'md'
                }}
              >
                Saiba mais sobre o nosso programa de evolu????o
              </Text>

              <Fade bottom>
                <Box
                  maxW="container.md"
                  mx="auto"
                  p="1"
                  bgGradient="linear(to-br, purple.600, blue.600)"
                  borderRadius="md"
                  boxShadow={{
                    base: 'md',
                    md: 'dark-lg'
                  }}
                  mb="-56"
                >
                  <Box bg="gray.800" p="10">
                    <Stack>
                      <Text
                        fontWeight="black"
                        fontSize="3xl"
                        bgGradient="linear(to-br, #b721ff, #21d4fd)"
                        bgClip="text"
                      >
                        O que ?? o DEVs Pai d&apos;??gua?
                      </Text>
                      <Text fontSize="lg" fontWeight="medium" color="gray.400">
                        ?? um programa de acelera????o para estudantes da UFPA
                        apoiado por Empresas de tecnologia paraenses e pela
                        Faculdade de Computa????o. O objetivo do DEVs Pai d?????gua
                        consiste na capacita????o de talentos para a ??rea de
                        desenvolvimento de software orientada por pr??ticas do
                        mercado, desafios e mentorias ao longo desse processo. A
                        ideia ?? que ap??s a capacita????o, os participantes estejam
                        aptos para ingressarem no mercado de trabalho.
                      </Text>
                    </Stack>
                  </Box>
                </Box>
              </Fade>
            </Flex>
          </Container>
        </Flex>
        <Flex as="section" py="20" width="100%" bg="gray.900" mt="32">
          <Container maxW="container.xl" centerContent>
            <Flex direction="column" gridGap="12" width="100%">
              <Text
                fontSize={{
                  base: '3xl',
                  md: '4xl'
                }}
                fontWeight="bold"
                textAlign="center"
                mx="auto"
                maxW={{
                  base: 'auto',
                  md: 'lg'
                }}
              >
                Um pouco mais sobre os temas que ser??o abordados
              </Text>

              <Grid
                gridTemplateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(2, minmax(0, 1fr))'
                }}
                gap={{
                  base: '4',
                  md: '6'
                }}
              >
                <GridItem>
                  <Flex
                    direction="column"
                    gridGap={{
                      base: '4',
                      md: '6'
                    }}
                  >
                    <Fade>
                      <ThemeBox
                        themeTitle="Desenvolvimento de Software"
                        themeDescription="Desenvolvimento de software ?? um processo complexo que envolve v??rias etapas entre a concep????o do projeto e a sua conclus??o. Embora o objetivo principal seja resolver problemas, os programadores precisam estar atentos em manter a utiliza????o de boas pr??ticas e os princ??pios da arquitetura de software adotada."
                        themeBgImage="/assets/images/softdev-fundo.jpg"
                      />
                    </Fade>
                    <Fade delay={100}>
                      <ThemeBox
                        themeTitle="Gerenciamento de Projetos de Software"
                        themeDescription="O gerenciamento de projetos de software envolve diversas atividades em que m??tricas, ferramentas e pr??ticas s??o colocadas ?? prova. Mesmo que tiv??ssemos uma vis??o razo??vel e inicialmente est??vel dos requisitos, as mudan??as frequentes, quest??es envolvendo fatores humanos e altera????es na rota das prioridades podem tornar nossas estimativas question??veis. Nesse aspecto, veremos os princ??pios de um bom gerenciamento de projetos quanto ??s estimativas de esfor??o e prazo e por que os m??todos ??geis nos ajudam nesse desafio."
                        themeBgImage="/assets/images/softmanager-fundo.jpg"
                      />
                    </Fade>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex
                    direction="column"
                    gridGap={{
                      base: '4',
                      md: '6'
                    }}
                  >
                    <Fade delay={150}>
                      <ThemeBox
                        themeTitle="Soft Skills"
                        themeDescription="Existe uma demanda cada vez maior por profissionais qualificados e que dominem determinadas stacks de desenvolvimento. No entanto, muitas habilidades comportamentais s??o essenciais para um bom engenheiro de software. Voc?? quer aprender sobre lideran??a, comunica????o, trabalho em equipe e muito mais? Especialistas da ind??stria e pesquisadores ir??o compartilhar a import??ncia dessas habilidades e como podemos aprimor??-las."
                        themeBgImage="/assets/images/softskills-fundo.jpg"
                      />
                    </Fade>
                    <Fade delay={200}>
                      <ThemeBox
                        themeTitle="Qualidade e Introdu????o ao Teste de Software"
                        themeDescription="A atividade de teste ?? essencial para a Garantia de Qualidade de Software (Software Quality Assurance), entretanto trata-se de uma atividade cr??tica e din??mica, uma vez que defeitos podem ser inseridos ao longo de todo o processo de desenvolvimento e quanto mais tarde s??o identificados, maiores s??o os custos em resolv??-los e contornar seus efeitos. No DEVs Pai d'??gua os participantes ir??o conhecer os fundamentos da atividade de teste e ser??o desafiados a elaborar casos de teste relevantes e identificar defeitos passando por testes de unidade, testes de integra????o e revis??o de c??digo."
                        themeBgImage="/assets/images/softtesting-fundo.jpg"
                      />
                    </Fade>
                  </Flex>
                </GridItem>
              </Grid>
            </Flex>
          </Container>
        </Flex>
        <Flex id="etapas" as="section" py="20" width="100%" bg="gray.800">
          <Container maxW="container.xl" centerContent>
            <Flex direction="column" gridGap="12" width="100%">
              <Text
                fontSize={{
                  base: '3xl',
                  md: '4xl'
                }}
                fontWeight="bold"
                textAlign="center"
              >
                Confira as etapas
              </Text>

              <Grid
                gridTemplateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(2, minmax(0, 1fr))'
                }}
                gridGap={{
                  base: '4',
                  md: '6'
                }}
              >
                <GridItem>
                  <Fade>
                    <StepsRow
                      stepTitle="1. INSCRI????O"
                      stepDate="At?? 10.04"
                      stepDescription="Inscreva-se para poder ser avaliado pela nossa equipe e participar do processo seletivo"
                    />
                  </Fade>
                </GridItem>
                <GridItem>
                  <Fade delay={100}>
                    <StepsRow
                      stepTitle="2. DESAFIO"
                      stepDate="25.04 a 29.04"
                      stepDescription="Solu????es para um contexto espec??fico (a ser divulgado) ser??o propostas pelos participantes. Ap??s avalia????o, um ou mais projetos dever??o ser desenvolvidos adotando uma stack j?? definida."
                    />
                  </Fade>
                </GridItem>
                <GridItem>
                  <Fade delay={150}>
                    <StepsRow
                      stepTitle="3. ACELERA????O"
                      stepDate="29.04 a 19.08"
                      stepDescription="Ao longo de 4 meses os alunos ir??o desenvolver as funcionalidades de um projeto de forma incremental. Um f??rum para compartilhamento de d??vidas e troca de conhecimento ser?? adotado para estimular a colabora????o. Reuni??es semanais mais direcionadas com professores e mentores s??o esperadas para feedbacks e assim, superar as dificuldades ao longo do desenvolvimento."
                    />
                  </Fade>
                </GridItem>
                <GridItem>
                  <Fade delay={200}>
                    <StepsRow
                      stepTitle="4. DEMODAY"
                      stepDate="22.08 a 26.08"
                      stepDescription="Apresenta????o aberta para todas as empresas participantes do programa de acelera????o."
                    />
                  </Fade>
                </GridItem>
                <GridItem>
                  <Fade delay={250}>
                    <StepsRow
                      stepTitle="5. CONTRATA????O"
                      stepDate="A partir de 29.08"
                      stepDescription="Em caso de interesse das empresas parceiras, ap??s o julgamento do Demoday, os melhores alunos poder??o ser contratados."
                    />
                  </Fade>
                </GridItem>
              </Grid>
            </Flex>
          </Container>
        </Flex>
        <Flex id="faq" as="section" py="20" width="100%" bg="gray.900">
          <Container maxW="container.xl" centerContent>
            <Flex direction="column" gridGap="12" width="100%">
              <Text
                fontSize={{
                  base: '3xl',
                  md: '4xl'
                }}
                fontWeight="bold"
                textAlign="center"
              >
                Perguntas frequentes
              </Text>

              <Flex direction="column" gridGap="4">
                {faqData.map((faq, index) => (
                  <Fade key={index} bottom>
                    <FaqCollapse
                      faqNumber={index + 1}
                      faqTitle={faq.title}
                      faqDescription={faq.description}
                    />
                  </Fade>
                ))}
              </Flex>
            </Flex>
          </Container>
        </Flex>
        <Flex id="time" as="section" py="20" width="100%" bg="gray.800">
          <Container maxW="container.xl" centerContent>
            <Flex direction="column" gridGap="12" width="100%">
              <Text
                fontSize={{
                  base: '3xl',
                  md: '4xl'
                }}
                fontWeight="bold"
                textAlign="center"
                mx="auto"
                maxW={{
                  base: 'auto',
                  md: 'lg'
                }}
              >
                Conhe??a nossa equipe
              </Text>

              <Grid
                gridTemplateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(3, minmax(0, 1fr))'
                }}
                gap={{
                  base: '4',
                  md: '6'
                }}
              >
                <GridItem>
                  <Flex
                    direction="column"
                    gridGap={{
                      base: '4',
                      md: '6'
                    }}
                  >
                    <Fade>
                      <TeamBox
                        teamName="Victor Hugo Santiago"
                        teamPhotoUrl="/assets/images/equipe/victor.png"
                        teamRole="Doutor pelo ICMC/USP (2019)"
                        teamDescription="Realiza pesquisas na linha de testes de software, qualidade e evolu????o de software. Atuou com incentivos de apoio ?? inova????o para as empresas do Brasil (2016-2020) e com pesquisas na ZUP Innovation."
                      />
                      <TeamBox
                        teamName="Vinicius Abreu"
                        teamPhotoUrl="/assets/images/equipe/vini.png"
                        teamRole="Doutor pela UFMG (2014)"
                        teamDescription="Atua na ??rea da Bioinform??tica, com experi??ncia em desenvolvimento de software e an??lise de dados ??mico e biol??gicos."
                      />
                    </Fade>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex
                    direction="column"
                    gridGap={{
                      base: '4',
                      md: '6'
                    }}
                  >
                    <Fade delay={100}>
                      <TeamBox
                        teamName="Gustavo Pinto"
                        teamPhotoUrl="/assets/images/equipe/gustavo.png"
                        teamRole="Doutor pela UFPE (2015)"
                        teamDescription="Estuda boas pr??ticas de desenvolvimento de software."
                      />
                      <TeamBox
                        teamName="Cleidson R. Botelho de Souza"
                        teamPhotoUrl="/assets/images/equipe/cleidson.jpg"
                        teamRole="Doutor pela University Of California, Irvine, U. C., Estados Unidos.(2005)"
                        teamDescription="Atuando principalmente na ??rea de sistemas colaborativos, engenharia de software emp??rica e engenharia de software colaborativa."
                      />
                    </Fade>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex
                    direction="column"
                    gridGap={{
                      base: '4',
                      md: '6'
                    }}
                  >
                    <Fade delay={150}>
                      <TeamBox
                        teamName="Rodrigo Quites"
                        teamPhotoUrl="/assets/images/equipe/rodrigo_quites.jpeg"
                        teamRole="Doutor pela UFRGS (2002)"
                        teamDescription="Atua em Arquitetura de Software, Melhoria de Processos, e Gest??o da Inova????o. Atualmente, ?? o gestor da Funda????o Guam??, respons??vel pelo PCT Guam??."
                      />
                      <TeamBox
                        teamName="Sandro Bezerra"
                        teamPhotoUrl="/assets/images/equipe/sandro.png"
                        teamRole="Doutor pela UFPE (2007)"
                        teamDescription="Atua na ??rea de Engenharia de Software, principalmente em melhoria do processos de software, qualidade de software, ger??ncia de projetos, ambiente de desenvolvimento de software e sistemas de informa????o."
                      />
                    </Fade>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Fade delay={200}></Fade>
                </GridItem>
              </Grid>
            </Flex>
          </Container>
        </Flex>
        <Flex id="expectativas" as="section" py="20" width="100%" bg="gray.900">
          <Container maxW="container.xl" centerContent>
            <Flex direction="column" gridGap="12" width="100%">
              <Text
                fontSize={{
                  base: '3xl',
                  md: '4xl'
                }}
                fontWeight="bold"
                textAlign="center"
                mx="auto"
                maxW={{
                  base: 'auto',
                  md: 'lg'
                }}
              >
                Expectativas do time com seu crescimento
              </Text>

              <Grid
                gridTemplateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(2, minmax(0, 1fr))'
                }}
                gap={{
                  base: '4',
                  md: '6'
                }}
              >
                <GridItem>
                  <Flex direction="column" gridGap="4">
                    <QuoteBox
                      quoteAuthor="Victor Hugo Santiago"
                      quoteContent={`"Queremos construir junto com os participantes, mentores e empres??rios paraenses um novo ecossistema de crescimento. Para isso, todos os conte??dos gerados para o programa unem fundamentos e pr??tica para que os participantes sejam capazes de evoluir em seu aprendizado e ingressar no mercado mais preparados. Feedbacks cont??nuos, um ambiente de colabora????o e a aproxima????o com profissionais da regi??o podem contribuir muito para o sucesso do DEVS Pai d'??gua na forma????o de uma nova gera????o de desenvolvedores de software."`}
                      quoteAuthorImage="/assets/images/equipe/victor.png"
                      quoteRole="Professor na UFPA e Coordenador"
                    />
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex direction="column" gridGap="4">
                    <QuoteBox
                      quoteAuthor="Marcelo Rocha de S??"
                      quoteContent={`"'N??o sabendo que era imposs??vel, foi l?? e fez' ?? uma frase de Jean Cocteau que me inspira. Quando diferentes gera????es de profissionais trabalham juntas, frequentemente costuma ser prof??cua para a inova????o. A diversidade cultural, de caracter??sticas,  de trajet??rias de vida, viabilizam perspectivas diferentes para  enfrentamento de desafios, identifica????o de problemas realmente relevantes e solu????es inovadoras. O DEVS Pai d???egua traz esse conceito como um fundamento, em que professores, executivos e profissionais da ind??stria de software, alunos e outros atores buscam juntos conhecimento relevante para a evolu????o do ecossistema de software e tecnologia paraense."`}
                      quoteAuthorImage="/assets/images/apoiadores/marcelo_jambu.jpg"
                      quoteRole="JambuLabs Health Tech Studio"
                    />
                  </Flex>
                </GridItem>
              </Grid>
            </Flex>
          </Container>
        </Flex>
        <Flex id="parceiros" as="section" py="20" width="100%" bg="gray.800">
          <Container maxW="container.xl" centerContent>
            <Flex direction="column" gridGap="12" width="100%">
              <Text
                fontSize={{
                  base: '3xl',
                  md: '4xl'
                }}
                fontWeight="bold"
                textAlign="center"
              >
                Empresas parceiras
              </Text>

              <Flex justifyContent="center">
                <Grid
                  gridTemplateColumns={{
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(4, minmax(0, 1fr))'
                  }}
                  gap={{
                    base: '4',
                    md: '6'
                  }}
                >
                  <GridItem>
                    <Flex
                      direction="column"
                      gridGap={{
                        base: '4',
                        md: '6'
                      }}
                    >
                      <Fade>
                        <SponsorBox
                          imageUrl="/assets/images/apoiadores/equilibrium-logo.png"
                          imageWidth={188}
                          imageHeight={53}
                          imageAlt="Equilibrium Logo"
                        />
                        <SponsorBox
                          imageUrl="/assets/images/apoiadores/csconsoft.png"
                          imageWidth={190}
                          imageHeight={53}
                          imageAlt="Csconsoft Logo"
                        />
                      </Fade>
                    </Flex>
                  </GridItem>
                  <GridItem>
                    <Flex
                      direction="column"
                      gridGap={{
                        base: '4',
                        md: '6'
                      }}
                    >
                      <Fade delay={100}>
                        <SponsorBox
                          imageUrl="/assets/images/apoiadores/jambu-logo.png"
                          imageWidth={164}
                          imageHeight={92}
                          imageAlt="Jambu Logo"
                        />
                        <SponsorBox
                          imageUrl="/assets/images/apoiadores/inteceleri-logo.png"
                          imageWidth={172}
                          imageHeight={35}
                          imageAlt="Inteceleri Logo"
                        />
                      </Fade>
                    </Flex>
                  </GridItem>
                  <GridItem>
                    <Flex
                      direction="column"
                      gridGap={{
                        base: '4',
                        md: '6'
                      }}
                    >
                      <Fade delay={150}>
                        <SponsorBox
                          imageUrl="/assets/images/apoiadores/techlead.png"
                          imageWidth={192}
                          imageHeight={40}
                          imageAlt="TechLead Logo"
                        />
                        <SponsorBox
                          imageUrl="/assets/images/apoiadores/w3.png"
                          imageWidth={240}
                          imageHeight={60}
                          imageAlt="TechLead Logo"
                        />
                        <SponsorBox
                          imageUrl="/assets/images/apoiadores/bredi-logo.svg"
                          imageWidth={142}
                          imageHeight={53}
                          imageAlt="Bredi Logo"
                        />
                      </Fade>
                    </Flex>
                  </GridItem>
                  <GridItem>
                    <Flex
                      direction="column"
                      gridGap={{
                        base: '4',
                        md: '6'
                      }}
                    >
                      <Fade delay={200}>
                        <SponsorBox
                          imageUrl="/assets/images/apoiadores/vibe-logo.png"
                          imageWidth={146}
                          imageHeight={84}
                          imageAlt="Vibe Logo"
                        />
                        <SponsorBox
                          imageUrl="/assets/images/apoiadores/easygestor-logo.png"
                          imageWidth={181}
                          imageHeight={68}
                          imageAlt="Easygestor Logo"
                        />
                      </Fade>
                    </Flex>
                  </GridItem>
                </Grid>
              </Flex>
            </Flex>
          </Container>
        </Flex>
        <Flex as="section" py="20" width="100%" bg="gray.900">
          <Container maxW="container.xl" centerContent>
            <Flex
              direction="column"
              gridGap="4"
              width="100%"
              position="relative"
              mb="24"
            >
              <Text fontSize="3xl" textAlign="center" fontWeight="600">
                Apoio
              </Text>
              <Flex
                alignItems="center"
                justifyContent="center"
                gridGap="4"
                direction={{
                  base: 'column',
                  md: 'row'
                }}
              >
                <SponsorBox
                  imageUrl="/assets/images/apoiadores/ufpa-logo.png"
                  imageWidth={240}
                  imageHeight={80}
                  imageAlt="Ufpa Logo"
                />
                <SponsorBox
                  imageUrl="/assets/images/apoiadores/pct-guama.png"
                  imageWidth={240}
                  imageHeight={80}
                  imageAlt="PCT Guam?? Logo"
                />
                <SponsorBox
                  imageUrl="/assets/images/apoiadores/paratic.png"
                  imageWidth={240}
                  imageHeight={80}
                  imageAlt="Paratic Logo"
                />
              </Flex>
            </Flex>
            <Flex
              direction="column"
              gridGap="12"
              width="100%"
              position="relative"
            >
              <Stack spacing={4} zIndex={2}>
                <Fade bottom>
                  <Text
                    fontSize={{
                      base: '4xl',
                      md: '5xl'
                    }}
                    fontWeight="bold"
                    textAlign="center"
                    lineHeight="shorter"
                  >
                    <Text
                      bgGradient="linear(to-br, #b721ff, #21d4fd)"
                      bgClip="text"
                    >
                      D?? o pr??ximo passo
                    </Text>
                    para a evolu????o na carreira
                  </Text>
                </Fade>
                <Fade bottom>
                  <Text
                    textAlign="center"
                    mx="auto"
                    maxW={{
                      base: 'md',
                      md: 'lg'
                    }}
                    fontSize={{
                      base: 'md',
                      md: 'xl'
                    }}
                    color="gray.400"
                  >
                    Fa??a sua matr??cula e reserve sua oportunidade para fazer
                    parte do processo de evolu????o na sua carreira como
                    programador.
                  </Text>
                </Fade>
              </Stack>

              <Flex justifyContent="center" zIndex={2}>
                <Fade bottom>
                  <Button
                    width="fit-content"
                    bgGradient="linear(to-br, purple.600, blue.600)"
                    px="8"
                    py="8"
                    fontSize={{
                      base: 'md',
                      md: 'lg'
                    }}
                    _hover={{
                      bgColor: 'linear(to-br, purple.600, blue.600)'
                    }}
                    _active={{
                      bgColor: 'linear(to-br, purple.600, blue.600)'
                    }}
                    as="a"
                    href="https://forms.gle/2qGhbKHdheS4cmpSA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inscreva-se agora
                  </Button>
                </Fade>
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </Flex>
      <Flex as="footer" width="100%" bg="gray.900" zIndex={2}>
        <Container maxW="container.xl" centerContent>
          <Grid
            py="8"
            gap={{
              base: '14',
              md: '20'
            }}
            width="100%"
            borderTop="solid 1px"
            borderColor="gray.700"
            gridTemplateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(12, 1fr)'
            }}
          >
            <GridItem colSpan={3}>
              <Flex
                direction="column"
                gridGap="4"
                alignItems={{
                  base: 'center',
                  md: 'flex-start'
                }}
              >
                <Image
                  src="/assets/images/logo.png"
                  width={140}
                  height={71}
                  alt="Logo image"
                  objectFit="contain"
                />
                <Stack spacing={0} fontSize="sm">
                  <Text color="gray.400">
                    Programa Devs Pai D&apos;??gua 2022
                  </Text>
                  <Text color="gray.400">Todos os direitos reservados</Text>
                </Stack>
              </Flex>
            </GridItem>
            <GridItem colSpan={3}>
              <Flex
                direction="column"
                gridGap="4"
                alignItems={{
                  base: 'center',
                  md: 'flex-start'
                }}
              >
                <Text fontSize="xl" fontWeight="bold">
                  Siga a gente nas redes:
                </Text>
                <Flex alignItems="center" gridGap="4">
                  <Box
                    p="4"
                    borderRadius="md"
                    bg="gray.800"
                    fontSize="xl"
                    cursor="pointer"
                    _hover={{
                      bgGradient: 'linear(to-br, purple.600, blue.600)'
                    }}
                  >
                    <Icon as={FaFacebook} />
                  </Box>
                  <Box
                    p="4"
                    borderRadius="md"
                    bg="gray.800"
                    fontSize="xl"
                    cursor="pointer"
                    _hover={{
                      bgGradient: 'linear(to-br, purple.600, blue.600)'
                    }}
                  >
                    <Icon as={FaTwitter} />
                  </Box>
                  <Box
                    p="4"
                    borderRadius="md"
                    bg="gray.800"
                    fontSize="xl"
                    cursor="pointer"
                    _hover={{
                      bgGradient: 'linear(to-br, purple.600, blue.600)'
                    }}
                    as="a"
                    href="https://www.instagram.com/devspaidegua/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon as={FaInstagram} />
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
            <GridItem colSpan={3}>
              <Flex
                direction="column"
                gridGap="4"
                alignItems={{
                  base: 'center',
                  md: 'flex-start'
                }}
              >
                <Text fontSize="xl" fontWeight="bold">
                  Entre em contato:
                </Text>
                <Text color="gray.400" fontWeight="medium">
                  devspaidegua@gmail.com
                </Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={3}>
              <Flex
                direction="column"
                alignItems={{
                  base: 'center',
                  md: 'flex-end'
                }}
              >
                <Box
                  textAlign={{
                    base: 'center',
                    md: 'left'
                  }}
                >
                  <Text fontSize="md" fontWeight="medium" color="gray.400">
                    Desenvolvido por
                  </Text>
                  <a
                    href="https://jandrade.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/assets/images/dev-logo.svg"
                      width={150}
                      height={60}
                      quality={100}
                      alt="Site Developer logo"
                      objectFit="contain"
                    />
                  </a>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
      </Flex>
    </Layout>
  )
}

export default IndexPage
