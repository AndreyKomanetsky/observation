import React from "react";

export const LinkCard = ({ link }) => {
    return (
        <>
        <h2> Запись</h2>
        <p>Марка: <strong>{link.mark}</strong></p>
        <p>Тип кузова: <strong>{link.caseType}</strong></p>
        <p>Номер: <strong>{link.number}</strong></p>
        <p>Дата: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        <p>Время: <strong>{new Date(link.date).toLocaleTimeString()}</strong></p>
        </>
    )
}