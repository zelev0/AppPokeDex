import React from 'react';
import './Pagination.css'

const Pagination = ({ currentPage, setCurrentPage, quantityPages, currentBlock,pages, setCurrentBlock, pagesPerBlock}) => {

    const prevPage = e => {
        if (currentPage - 1 === 0) {
            setCurrentPage(quantityPages);
            setCurrentBlock(Math.ceil(quantityPages / pagesPerBlock));
        } else {
            setCurrentPage(currentPage - 1);
            setCurrentBlock(Math.ceil((currentPage-1) / pagesPerBlock));
        }
    }

    const nextPage = e => {
        if (currentPage + 1 > quantityPages) {
            setCurrentPage(1);
            setCurrentBlock(1);
        } else {
            setCurrentPage(currentPage + 1);
            setCurrentBlock(Math.ceil((currentPage + 1)/pagesPerBlock));
        }
    }

    const nextBlock = e => {
        if (currentBlock + 1 > Math.ceil(quantityPages / pagesPerBlock)) {
            setCurrentBlock(1);
        } else {
            setCurrentBlock(currentBlock + 1)
        }
    }

    const prevBlock = e => {
        if (currentBlock - 1 === 0) {
            setCurrentBlock(Math.ceil(quantityPages / pagesPerBlock))
        } else {
            setCurrentBlock(currentBlock - 1)
        }
    }

    const changePageTo = n => { setCurrentPage(n), setCurrentBlock(Math.ceil(n / pagesPerBlock)) };

    return (
        <div className='Pagination__container'>
            <button onClick={prevPage} className='Pagination__Ctrls Pagination__Ctrls--page' title='Pagina Anterior'>&#60;</button>
            {!(currentBlock === 1) && <button onClick={prevBlock} className='Pagination__Ctrls Pagination__Ctrls--block' title='Cargar páginas anteriores'>...</button>}
            <ul className='Pagination__NumberContainer'>
                {
                    pages?.map(num => (
                        <li
                            onClick={() => changePageTo(num)}
                            key={num}
                            className={currentPage === num ? `Page__number Page__active` : `Page__number`}
                            title={`Ir a página ${num}`}
                        >{num}</li>
                    ))
                }
            </ul>
            {!(currentBlock === Math.ceil(quantityPages / pagesPerBlock)) && <button onClick={nextBlock} className="Pagination__Ctrls Pagination__Ctrls--block" title='Cargar más páginas'>...</button>}
            <button onClick={nextPage} className='Pagination__Ctrls Pagination__Ctrls--page' title='Pagina siguiente'>&#62;</button>
        </div>
    )
}

export default Pagination