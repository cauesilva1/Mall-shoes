"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { Monoton } from "next/font/google";
import { BiMenu } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiChevronsUp } from "react-icons/fi";

const monoton = Monoton({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo2.png" 
        width={110} 
        height={110} 
        alt="Logo do site" />
      </div>

        <nav className={styles.navegation}>
          <a href="#">Categorias</a>
          <a href="#">Contato</a>
          <a href="#">Sobre</a>
        </nav>
      </header>

      {/* mobile */}
      <section>
        <div className={styles.mobile}>
          <Image src="/logo2.png" width={110} height={110} alt="Logo do site" />

          <BiMenu
            className={styles.hambuerguer}
            onClick={() => setMenu((prev) => !prev)}
          />
        </div>

        {menu && (
          <div>
            <nav className={styles.mobileNavegation}>
            <a href="#">Categorias</a>
            <a href="#">Contato</a>
            <a href="#">Sobre</a>
          </nav>
          </div>
        )}
      </section>

      <div className={styles.container}>
        <section className={styles.logos}>
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
        </section>
      </div>

          {/* mobile logos*/}
      <div className={`${styles.container} ${styles.containerMobile}`  }>
        <section className={`${styles.logos} ${styles.logosMobile}`}>
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
        </section>
      </div>
        
        {/* botão para subir toda a tela */}
      {/* <a id="backToTopButton" className={styles.buttonTop} title="Voltar ao topo" href="#home" >
          <FiChevronsUp 
          className={styles.backToTopButton}/>
        </a> */}

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

        {/* <div className={styles.Contatos}>
            <h1>Contatos</h1>
            <div >
              <AiOutlineInstagram 
                className={styles.iconsFooter}          
              />
              <FaFacebookF  
              className={styles.iconsFooter} 
              />
            </div>
        </div> */}
        </footer>


    </>
  );
}
