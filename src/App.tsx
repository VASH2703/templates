import React from 'react';
import {TitlePage, TitleSection, TitleBlock, TitleSmall, Text, Paragraph, Quote, Important} from "./lib";
import {DropdownText} from "./lib";
import {Tabs, ContentBlock} from "./lib";
import { ListOrder, ListUnorder, ListItem} from "./lib";
import {PhotoGallery, VideoGallery} from "./lib";
import {Table} from "./lib";
import {Button} from "./lib";
import {Media} from "./lib";
import {TextInput, Select, RadioItem, RadioGroup, CheckBox, CheckList}  from "./lib";
import {Page, Section} from "./lib";

function App() {

  return (
    <>
      <Page className="check">

        
        <TitlePage>Заголовок первого уровня</TitlePage>
        <TitleSection>Заголовок второго уровня</TitleSection>
        <TitleBlock>Заголовок третьего уровня</TitleBlock>
        <TitleSmall textAling='center'>Заголовок четвертого уровня</TitleSmall>
        
        <Text>
            Основной текст. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem culpa sapiente molestiae recusandae! Libero laborum rem, doloremque amet earum nostrum maiores vel expedita quasi eaque quo eligendi temporibus nesciunt rerum labore illo maxime quae illum provident recusandae dolorem? Excepturi reiciendis blanditiis id pariatur praesentium explicabo facilis doloribus quibusdam error?
        </Text>

        <Section>
            <TitleSection>Заголовок второго уровня</TitleSection>
            <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque veritatis at sequi recusandae dignissimos! Quisquam, magni voluptates. Minus minima nulla atque beatae. Dicta exercitationem sed quia doloribus non repellat ducimus consequatur quas? Architecto aspernatur beatae sint exercitationem, quis neque impedit!</Paragraph>
            <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque officia libero ullam repellat illum esse et iste odio enim sunt nemo debitis, nihil incidunt! Corrupti velit, facere quae harum minus at hic nihil iste vel molestias doloremque consequatur assumenda dicta minima, sit beatae voluptatum nulla! Distinctio sint assumenda laboriosam cumque.</Paragraph>

            <Important title='Важная информация'>
                Таким образом постоянный количественный рост и сфера нашей активности способствует подготовки и реализации дальнейших направлений развития. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности требуют от нас анализа форм развития. 
            </Important>
        </Section>
        <TitleSection>Цитата</TitleSection>
        <Quote>
            Таким образом постоянный количественный рост и сфера нашей активности способствует подготовки и реализации дальнейших направлений развития.
        </Quote>

        <TitleSection >Нумерованный список</TitleSection>
        <ListOrder>
            <ListItem >Таким образом постоянный количественный рост и сфера нашей активности способствует подготовки и реализации дальнейших направлений развития.</ListItem>
            <ListItem >Равным образом постоянное информационно-пропагандистское обеспечение.</ListItem>
            <ListItem >Задача организации, в особенности же дальнейшее развитие различных форм деятельности играет важную роль в формировании направлений прогрессивного развития.</ListItem>
        </ListOrder>

        <TitleSection>Маркированный список</TitleSection>
        <ListUnorder>
            <ListItem>Таким образом постоянный количественный рост и сфера нашей активности способствует подготовки и реализации дальнейших направлений развития.</ListItem>
            <ListItem>Равным образом постоянное информационно-пропагандистское обеспечение.</ListItem>
            <ListItem>Задача организации, в особенности же дальнейшее развитие различных форм деятельности играет важную роль в формировании направлений прогрессивного развития.</ListItem>
        </ListUnorder>

        <TitleSection>Раскрывающийся блок</TitleSection>
        <DropdownText title='Заголовок 1' defaultStyle>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab temporibus vitae vel natus, illo quae officiis dolor ducimus, voluptatem, dolorem enim. Veritatis at ratione doloremque voluptatem sunt. Incidunt repellendus omnis dolores, maiores quod exercitationem facilis beatae obcaecati quasi quia provident quaerat temporibus officiis non, deleniti dolor enim libero doloribus.
            </Paragraph>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab temporibus vitae vel natus, illo quae officiis dolor ducimus, voluptatem, dolorem enim. Veritatis at ratione doloremque voluptatem sunt. Incidunt repellendus omnis dolores, maiores quod exercitationem facilis beatae obcaecati quasi quia provident quaerat temporibus officiis non, deleniti dolor enim libero doloribus.
            </Paragraph>
        </DropdownText>
        <DropdownText title='Заголовок 2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab temporibus vitae vel natus, illo quae officiis dolor ducimus, voluptatem, dolorem enim. Veritatis at ratione doloremque voluptatem sunt. Incidunt repellendus omnis dolores, maiores quod exercitationem facilis beatae obcaecati quasi quia provident quaerat temporibus officiis non, deleniti dolor enim libero doloribus.
        </DropdownText>
        <DropdownText title='Заголовок 3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab temporibus vitae vel natus, illo quae officiis dolor ducimus, voluptatem, dolorem enim. Veritatis at ratione doloremque voluptatem sunt. Incidunt repellendus omnis dolores, maiores quod exercitationem facilis beatae obcaecati quasi quia provident quaerat temporibus officiis non, deleniti dolor enim libero doloribus.
        </DropdownText>

        <Tabs className="check" titles={['О программе', 'Содержание','Преподаватели','Карьера','Итоги приёма прошлых лет']}>
            <ContentBlock>
                <TitleSection>О программе</TitleSection>
                <Media title = 'Vidio1' date = '01.01.2001' width='40%' aspectRatio={16/9} float={'left'}>
                    <iframe
                        src="https://vk.com/video_ext.php?oid=-225771088&id=456239350&hash=481ea2e7e52bb5bf"
                        allowFullScreen
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    />
                </Media>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quas nostrum, obcaecati odit nulla a veritatis, dolores voluptatibus aliquam ab mollitia accusantium? Quasi itaque debitis earum, voluptate magnam a esse labore ducimus ad vero expedita eligendi quo. Aut molestiae, et nam dolores expedita aliquid at adipisci ducimus officia explicabo natus nemo consequuntur iure reiciendis? Aut quis distinctio et animi sapiente facilis dolores, facere officia, cupiditate voluptatem quae quisquam adipisci pariatur natus ducimus laboriosam amet. Quasi cum modi in dicta accusantium?
                </Text>
            </ContentBlock>

            <ContentBlock>
                <TitleSection>Содержание</TitleSection>
                <Media width='40%' float='right'>
                    <video src='example.mp4' controls/>
                </Media>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quas nostrum, obcaecati odit nulla a veritatis, dolores voluptatibus aliquam ab mollitia accusantium? Quasi itaque debitis earum, voluptate magnam a esse labore ducimus ad vero expedita eligendi quo. Aut molestiae, et nam dolores expedita aliquid at adipisci ducimus officia explicabo natus nemo consequuntur iure reiciendis? Aut quis distinctio et animi sapiente facilis dolores, facere officia, cupiditate voluptatem quae quisquam adipisci pariatur natus ducimus laboriosam amet. Quasi cum modi in dicta accusantium?
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quas nostrum, obcaecati odit nulla a veritatis, dolores voluptatibus aliquam ab mollitia accusantium? Quasi itaque debitis earum, voluptate magnam a esse labore ducimus ad vero expedita eligendi quo. Aut molestiae, et nam dolores expedita aliquid at adipisci ducimus officia explicabo natus nemo consequuntur iure reiciendis? Aut quis distinctio et animi sapiente facilis dolores, facere officia, cupiditate voluptatem quae quisquam adipisci pariatur natus ducimus laboriosam amet. Quasi cum modi in dicta accusantium?
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quas nostrum, obcaecati odit nulla a veritatis, dolores voluptatibus aliquam ab mollitia accusantium? Quasi itaque debitis earum, voluptate magnam a esse labore ducimus ad vero expedita eligendi quo. Aut molestiae, et nam dolores expedita aliquid at adipisci ducimus officia explicabo natus nemo consequuntur iure reiciendis? Aut quis distinctio et animi sapiente facilis dolores, facere officia, cupiditate voluptatem quae quisquam adipisci pariatur natus ducimus laboriosam amet. Quasi cum modi in dicta accusantium?
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quas nostrum, obcaecati odit nulla a veritatis, dolores voluptatibus aliquam ab mollitia accusantium? Quasi itaque debitis earum, voluptate magnam a esse labore ducimus ad vero expedita eligendi quo. Aut molestiae, et nam dolores expedita aliquid at adipisci ducimus officia explicabo natus nemo consequuntur iure reiciendis? Aut quis distinctio et animi sapiente facilis dolores, facere officia, cupiditate voluptatem quae quisquam adipisci pariatur natus ducimus laboriosam amet. Quasi cum modi in dicta accusantium?
                </Text>
            </ContentBlock>

            <ContentBlock>
                <TitleSection>Преподаватели</TitleSection>
                <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quas nostrum, obcaecati odit nulla a veritatis, dolores voluptatibus aliquam ab mollitia accusantium? Quasi itaque debitis earum, voluptate magnam a esse labore ducimus ad vero expedita eligendi quo. Aut molestiae, et nam dolores expedita aliquid at adipisci ducimus officia explicabo natus nemo consequuntur iure reiciendis? Aut quis distinctio et animi sapiente facilis dolores, facere officia, cupiditate voluptatem quae quisquam adipisci pariatur natus ducimus laboriosam amet. Quasi cum modi in dicta accusantium?
                </Text>
            </ContentBlock>

            <ContentBlock>
                <TitleSection>Карьера</TitleSection>
                <Media width='40%' float='right' aspectRatio={3/2}>
                    <img src = 'example4.jpg'/>
                </Media>
                <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quas nostrum, obcaecati odit nulla a veritatis, dolores voluptatibus aliquam ab mollitia accusantium? Quasi itaque debitis earum, voluptate magnam a esse labore ducimus ad vero expedita eligendi quo. Aut molestiae, et nam dolores expedita aliquid at adipisci ducimus officia explicabo natus nemo consequuntur iure reiciendis? Aut quis distinctio et animi sapiente facilis dolores, facere officia, cupiditate voluptatem quae quisquam adipisci pariatur natus ducimus laboriosam amet. Quasi cum modi in dicta accusantium?
                </Text>
            </ContentBlock>

            <ContentBlock>
                <TitleSection>Итоги приёма прошлых лет</TitleSection>
                <Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quas nostrum, obcaecati odit nulla a veritatis, dolores voluptatibus aliquam ab mollitia accusantium? Quasi itaque debitis earum, voluptate magnam a esse labore ducimus ad vero expedita eligendi quo. Aut molestiae, et nam dolores expedita aliquid at adipisci ducimus officia explicabo natus nemo consequuntur iure reiciendis? Aut quis distinctio et animi sapiente facilis dolores, facere officia, cupiditate voluptatem quae quisquam adipisci pariatur natus ducimus laboriosam amet. Quasi cum modi in dicta accusantium?
                </Text>
            </ContentBlock>
        </Tabs>
          
        <TitleSection>Блок фотогалереи</TitleSection>
        <PhotoGallery>
            <img src = 'doubleimg.jpg'/> 
            <img src = 'aspirantura_3.jpg'/>
            <img src = 'example1.jpeg'/>
            <img src = 'example2.jpeg'/>
            <img src = 'example3.jpg'/>
            <img src = 'example5.jpeg'/>
            <img src = 'example4.jpg'/>
            <img src = 'example1.jpeg'/>
        </PhotoGallery>
           
        <TitleSection>Блок видеогалереи</TitleSection>
        <VideoGallery>
            <Media
                title="«Университетский прорыв» - смена мечты"
                date="4 марта 2019"
                aspectRatio={16/9}
           >
                <iframe
                    src="https://rutube.ru/play/embed/d1da5bf68ed665d1ca21446992963aa6"
                    allowFullScreen
                />
            </Media>
            <Media
                title="«Университетский прорыв» - смена мечты"
                date="4 марта 2019"
                aspectRatio={16/9}
           >
                <iframe
                    src="https://vk.com/video_ext.php?oid=-225771088&id=456239350&hash=481ea2e7e52bb5bf"
                    allowFullScreen
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                />
            </Media> 
            <Media
                title="«Университетский прорыв» - смена мечты"
                date="4 марта 2019"
                aspectRatio={16/9}
            >
                <video src='example.mp4' controls preload="none"/>
            </Media>
        </VideoGallery>
        

        <TitleSection >Таблица</TitleSection>
        <Table
            sortable
            rows
            columns = {[
                "Направление подготовки (образовательная программа)",
                "Средняя сумма набранных баллов по всем вступительным испытаниям абитуриентов, зачисленных на бюджетные места",
                "Средняя сумма набранных баллов по всем вступительным испытаниям абитуриентов, зачисленных на места с оплатой cтоимости обучения"
            ]}
            data = {[
                ["Прикладная математика и информатика","212,6", "158,5"],
                ["Математика и компьютерные науки", "212,8", "187,1"],
                ["Фундаментальная информатика и информационные технологии", "232,6", "171,9"],
                ["Прикладная математика и информатика","212,6", "158,9"],
                ["Математика и компьютерные науки", "212,8", "187,1"],
                ["Фундаментальная информатика и информационные технологии", "232,6", "171,9"],
                ["Прикладная математика и информатика","212,2", "158,5"],
                ["Математика и компьютерные науки", "212,8", "187,1"],
                ["Фундаментальная информатика и информационные технологии", "232,6", "171,9"],
            ]}
        />
        <TitleSection >Кнопки</TitleSection>
          
        <TitleBlock >Маленькая кнопка</TitleBlock>

        <Button styleBtn={'primary'} size='small'>Кнопка много текста, очень много текста</Button>
        <Button styleBtn={'primary'} size='small' disabled>Кнопка</Button>
        <Button styleBtn={'secondary'} size='small'>Кнопка</Button>
        <Button styleBtn={'secondary'} size='small' disabled>Кнопка</Button>
        <Button styleBtn={'fillYellow'} size='small'>Кнопка</Button> 
        <Button styleBtn={'fillYellow'} size='small' disabled>Кнопка</Button>
        <Button styleBtn={'iconButton'} size='small'>
                <img src='eye.svg'/>
        </Button>
        <Button styleBtn={'iconButton'} size='small' disabled>
                <img src='eye.svg'/>
        </Button> 
        <div style={{backgroundColor: 'black'}} >
            <Button styleBtn={'whiteBorder'} size='small'>Кнопка</Button> 
            <Button styleBtn={'whiteBorder'} size='small' disabled>Кнопка</Button>  
        </div>
          
        <TitleBlock >Большая кнопка</TitleBlock>

        <Button styleBtn={'primary'} size='large'>Кнопка</Button>
        <Button styleBtn={'primary'} size='large' disabled>Кнопка</Button>
        <Button styleBtn={'secondary'} size='large'>Кнопка</Button>
        <Button styleBtn={'secondary'} size='large' disabled>Кнопка</Button>
        <Button styleBtn={'fillYellow'} size='large'>Кнопка</Button> 
        <Button styleBtn={'fillYellow'} size='large' disabled>Кнопка</Button> 
        <Button styleBtn={'iconButton'} size='large'>
                <img src='eye.svg'/>
        </Button>
        <Button styleBtn={'iconButton'} size='large' disabled>
                <img src='eye.svg'/>
        </Button> 
        <div style={{backgroundColor: 'black'}} >
            <Button styleBtn={'whiteBorder'} size='large'>Кнопка</Button> 
            <Button styleBtn={'whiteBorder'} size='large' disabled>Кнопка</Button>
        </div>

        <TitleSection >Поля ввода</TitleSection>

        <TextInput
            title="Заголовок"
            hint = "maxLines нет"
            resize={'both'}
        />

        <TextInput
            title="Заголовок"
            hint = "maxLines={1}"
            maxLines={1}
        />

        <TextInput
            title="Заголовок"
            hint = "maxLines={5}"
            maxLines={5}
        />

        <TextInput
            title="Заголовок"
            hint = "maxLines={6}"
            maxLines={6}
        />

        <TextInput
            title="Заголовок"
            hint = "maxLines={1}"
            maxLines={1}
            disabled
        />

        <TextInput
            title="Заголовок"
            maxLines={3}
            hint = "maxLines={3}"
            disabled
        />

        <Select
            hint={'Год рождения'}
            title = {'Выберите'}
            values={['2018', '2019', '2020']}
        />

        <Select
            hint={'Год рождения'}
            title = {'Выберите'}
            values={['2018', '2019', '2020']}
            disabled
        />

        <RadioItem>Аспирантура</RadioItem>
        
        <RadioGroup title='Уровень образования:' values={['Бакалавр',  'Магистр', 'Аспиратнт']} name={'g1'}/>

        <RadioGroup title='Уровень образования:' values={['Бакалавр',  'Магистр', 'Аспиратнт']} name={'g2'} disabled index={1}/>
        
        <Section>
            <CheckBox> Компьютерные науки </CheckBox>
            <CheckBox disabled> Компьютерные науки </CheckBox>
            <CheckBox disabled checked> Компьютерные науки </CheckBox> 
        </Section>
        <CheckList title='Уровень образования:' values={['Бакалавр',  'Магистр', 'Аспиратнт']} name={'g3'}/>

        <CheckList values={['Бакалавр',  'Магистр', 'Аспиратнт']} name={'g3'} disabled selected={[false, false, true]}/>

        <Section></Section>
        
    </Page>
    </>
  )
}

export default App
