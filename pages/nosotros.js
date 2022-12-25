import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/nosotros.module.css';

export default function Nosotros() {
  return (
    <div>
      <Layout title="Nosotros" description="Sobre nosotros, guitarLA, tienda de música">
        <main className="contenedor">
          <h1 className='header'>Nosotros</h1>

          <div className={styles.contenido}>
            <Image alt='imagen sobre nosotros' src="/img/nosotros.jpg" width={1000} height={800} />

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vero ea optio amet quis voluptates, debitis provident ducimus quisquam. Possimus rem, officia nobis delectus similique beatae perspiciatis eveniet quas unde eaque accusantium, saepe laborum eius autem est consectetur modi quam! Enim in, voluptates numquam necessitatibus nemo at, qui, ut nam consequatur fuga aperiam! Itaque assumenda nostrum sequi illo molestiae, sit adipisci esse totam, ipsum maxime blanditiis nisi eius error aperiam ipsa natus corporis odit dolorum veritatis? Vitae vero quae nam molestiae non dicta numquam modi, quos rerum, maiores illum ut voluptatem ea consequuntur repudiandae nihil atque minus voluptates voluptate dolor!
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}
