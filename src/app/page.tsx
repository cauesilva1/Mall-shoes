"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiChevronsUp } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

export default function Home() {
  const [menu, setMenu] = useState(false);

  const settings = {

    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>

        <header className={styles.header}>
          <div className={styles.headerContainer}>
              <Image 
              src="/logo2.png"
              width={110} 
              height={110} 
              alt="Logo do site" />

              <nav className={styles.navegation}>
                <a href="#">Categorias</a>
                <a href="#">Contato</a>
                <a href="#">Sobre</a>
              </nav>

            </div>
        </header>
    
        <div className={styles.Slider}>
          <div className={styles.sliderContainer}>
          <Slider {...settings}>
              <div>
                <Image
                  src="/nike-branco.png"
                  width={130}
                  height={130}
                  alt="Logo do site"
                />
              </div>
              <div>
                <Image
                  src="/puma-branca.png"
                  width={130}
                  height={130}
                  alt="Logo do site"
                />
              </div>
              <div>
                <Image
                  src="/under-branco.png"
                  width={130}
                  height={130}
                  alt="Logo do site"
                />
              </div>
              <div>
                <Image
                  src="/adidas-branca.png"
                  width={130}
                  height={130}
                  alt="Logo do site"
                />
              </div>
              <div>
                <Image
                  src="/nike-branco.png"
                  width={130}
                  height={130}
                  alt="Logo do site"
                />
              </div>
              <div>
                <Image
                  src="/puma-branca.png"
                  width={130}
                  height={130}
                  alt="Logo do site"
                />
              </div>
              <div>
                <Image
                  src="/under-branco.png"
                  width={130}
                  height={130}
                  alt="Logo do site"
                />
              </div>
              <div>
                <Image
                  src="/adidas-branca.png"
                  width={130}
                  height={130}
                  alt="Logo do site"
                />
              </div>
            </Slider>
          </div>
        </div>
        

        <main className={styles.main}>
            <div className={styles.fundo}>
              <Image
                className={styles.tenis}
                src="/tenis.png"
                width={300}
                height={300}
                alt="Tenis-principal"
              />
            </div>
            
          <section className={styles.cards }>
          
          <div className={styles.destaques}>
            <h1>LANÇAMENTOS</h1>
            <div className={styles.tenisDestaques}>

              <div className={styles.CardContainerDestaque}>
                <div className={styles.backgroundImage}>
                    <Image
                    className={styles.imageCard}
                    src="/tenis3.png"
                    width={250}
                    height={190}
                    alt="Tenis-principal"
                  />
                </div>
                <div className={styles.descriçãoProduto}>
                  <h3> Modelo do tenis</h3>
                  <h4>Tamanhos disponiveis</h4>
                  <div className={styles.Tamanhos}>
                  <p>41</p>
                  <p>42</p>
                  <p>43</p>
                  <p>44</p>
                  </div>
                  <a href="#">Saiba mais </a>
                </div>

              </div>

              <div className={styles.CardContainerDestaque}>
                <div className={styles.backgroundImage}>
                    <Image
                    className={styles.imageCard}
                    src="/tenis3.png"
                    width={250}
                    height={190}
                    alt="Tenis-principal"
                  />
                </div>
                <div className={styles.descriçãoProduto}>
                  <h3> Modelo do tenis</h3>
                  <h4>Tamanhos disponiveis</h4>
                  <div className={styles.Tamanhos}>
                  <p>41</p>
                  <p>42</p>
                  <p>43</p>
                  <p>44</p>
                  </div>
                  <a href="#">Saiba mais </a>
                </div>

              </div>

              <div className={styles.CardContainerDestaque}>
                <div className={styles.backgroundImage}>
                    <Image
                    className={styles.imageCard}
                    src="/tenis3.png"
                    width={250}
                    height={190}
                    alt="Tenis-principal"
                  />
                </div>
                <div className={styles.descriçãoProduto}>
                  <h3> Modelo do tenis</h3>
                  <h4>Tamanhos disponiveis</h4>
                  <div className={styles.Tamanhos}>
                  <p>41</p>
                  <p>42</p>
                  <p>43</p>
                  <p>44</p>
                  </div>
                  <a href="#">Saiba mais </a>
                </div>

              </div>

              <div className={styles.CardContainerDestaque}>
                <div className={styles.backgroundImage}>
                    <Image
                    className={styles.imageCard}
                    src="/tenis3.png"
                    width={250}
                    height={190}
                    alt="Tenis-principal"
                  />
                </div>
                <div className={styles.descriçãoProduto}>
                  <h3> Modelo do tenis</h3>
                  <h4>Tamanhos disponiveis</h4>
                  <div className={styles.Tamanhos}>
                  <p>41</p>
                  <p>42</p>
                  <p>43</p>
                  <p>44</p>
                  </div>
                  <a href="#">Saiba mais </a>
                </div>

              </div>
            </div>
          </div>

          <div className={styles.Category}>
            <h1>DIVERSOS</h1>
            <div className={styles.tenisCategory}>

              <div className={styles.CardContainerCategory}>
                <div className={styles.backgroundImage}>
                    <Image
                    className={styles.imageCard}
                    src="/tenis3.png"
                    width={250}
                    height={190}
                    alt="Tenis-principal"
                  />
                </div>
                <div className={styles.descriçãoProduto}>
                  <h3> Modelo do tenis</h3>
                  <h4>Tamanhos disponiveis</h4>
                  <div className={styles.Tamanhos}>
                  <p>41</p>
                  <p>42</p>
                  <p>43</p>
                  <p>44</p>
                  </div>
                  <a href="#">Saiba mais </a>
                </div>

              </div>

              <div className={styles.CardContainerDestaque}>
                <div className={styles.backgroundImage}>
                    <Image
                    className={styles.imageCard}
                    src="/tenis3.png"
                    width={250}
                    height={190}
                    alt="Tenis-principal"
                  />
                </div>
                <div className={styles.descriçãoProduto}>
                  <h3> Modelo do tenis</h3>
                  <h4>Tamanhos disponiveis</h4>
                  <div className={styles.Tamanhos}>
                  <p>41</p>
                  <p>42</p>
                  <p>43</p>
                  <p>44</p>
                  </div>
                  <a href="#">Saiba mais </a>
                </div>

              </div>

              <div className={styles.CardContainerDestaque}>
                <div className={styles.backgroundImage}>
                    <Image
                    className={styles.imageCard}
                    src="/tenis3.png"
                    width={250}
                    height={190}
                    alt="Tenis-principal"
                  />
                </div>
                <div className={styles.descriçãoProduto}>
                  <h3> Modelo do tenis</h3>
                  <h4>Tamanhos disponiveis</h4>
                  <div className={styles.Tamanhos}>
                  <p>41</p>
                  <p>42</p>
                  <p>43</p>
                  <p>44</p>
                  </div>
                  <a href="#">Saiba mais </a>
                </div>

              </div>

              <div className={styles.CardContainerDestaque}>
                <div className={styles.backgroundImage}>
                    <Image
                    className={styles.imageCard}
                    src="/tenis3.png"
                    width={250}
                    height={190}
                    alt="Tenis-principal"
                  />
                </div>
                <div className={styles.descriçãoProduto}>
                  <h3> Modelo do tenis</h3>
                  <h4>Tamanhos disponiveis</h4>
                  <div className={styles.Tamanhos}>
                  <p>41</p>
                  <p>42</p>
                  <p>43</p>
                  <p>44</p>
                  </div>
                  <a href="#">Saiba mais </a>
                </div>

              </div>

            </div>
          </div>


          </section>


        </main>



        <footer className={styles.footer}>
          <div className={styles.imageFooter}>
          <Image src="/logo2.png" 
            width={150} 
            height={150} 
            alt="Logo do site" />
          </div>

         <div className={styles.Contatos}>
              <h1>Contatos</h1>
              <div >
                <AiOutlineInstagram 
                  className={styles.iconsFooter}          
                />
                <FaFacebookF  
                className={styles.iconsFooter} 
                />
              </div>
          </div> 
          </footer>

    </>
  );
}
