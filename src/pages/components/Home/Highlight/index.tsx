import styles from './styles.module.css';
import coding from '../../../../../public/images/coding.svg';
import TelegramButton from '../../../../components/TelegramButton';

export default function Highlight() {
  return (
    <div className={`${styles.container} px-24`}>
      <div>
        <h1 className={styles.title}>
          Programação para todos com café e música.
        </h1>
        <h3 className={styles.subtitle}>
          Traceje rotas de estudo, ache uma vaga e descubra mais sobre
          programação.
        </h3>
        <div className={styles.telegramButton}>
          <TelegramButton />
        </div>
      </div>
      <div>
        <img src={coding} alt='pessoa programando' />
      </div>
    </div>
  );
}
