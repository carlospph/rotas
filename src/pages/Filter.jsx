import React from 'react';
import { Card } from '../components/card/Card';
import styles from './GlobalPage.module.css';
import { useState } from 'react';
import { ItemFilter } from '../components/itemFilter/ItemFilter';
import { Title } from '../components/itemFilter/Title';

export const Filter = () => {

  const [filter, setFilter] = useState(false);

  return (
    <div>
      <div className={styles.container__page__filter}>

        <button onClick={() => setFilter(!filter)} className={styles.btnFilter}>
          <i className="fa-solid fa-filter"></i>
        </button>

        {/* aqui */}

        <div className={styles.sidebar}>

          <Title title="Filtrar por" />

          <Title title="Marca" />

          <ItemFilter className={styles.dflex} label="Nike" id="nike" name="marca" value="Nike" />
          <ItemFilter className={styles.dflex} label="Adidas" id="adidas" name="marca" value="Adidas" />
          <ItemFilter className={styles.dflex} label="Puma" id="puma" name="marca" value="Puma" />
          <ItemFilter className={styles.dflex} label="Reebok" id="reebok" name="marca" value="Reebok" />
          <ItemFilter className={styles.dflex} label="Under Armour" id="underarmour" name="marca" value="Under Armour" />

          <Title title="Categoria" />


          <ItemFilter className={styles.dflex} label="Calçados" id="calcados" name="categoria" value="Calçados" />
          <ItemFilter className={styles.dflex} label="Roupas" id="roupas" name="categoria" value="Roupas" />
          <ItemFilter className={styles.dflex} label="Acessórios" id="acessorios" name="categoria" value="Acessórios" />

        </div>

        <div className={styles.container__cards__filter}>
          <Card />
        </div>

      </div>
    </div>
  );
};