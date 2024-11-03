"use client";

import React, { useState } from "react";
import { SearchBar } from "./searchBar";
import SelectFilter from "../selectFilter";
import { DatePickerDemo } from "./pickADate";

const socialMediaOptions = [
  { value: "X", label: "X" },
  { value: "Instagram", label: "Instagram" },
];

let timeOptions = [
  { value: "Última semana", label: "Última semana" },
  { value: "Ultimos 30 dias", label: "Ultimos 30 dias" },
  { value: "Ultimos 6 meses", label: "Ultimos 6 meses" },
  { value: "Ultimo ano", label: "Ultimo ano" },
  { value: "Todos", label: "Todos" },
  { value: "Personalizado", label: "Personalizado" },
];

const popularityOptions = [
  { value: "Curtidas", label: "Curtidas" },
  { value: "Comentarios", label: "Comentarios" },
  { value: "Compartilhamentos", label: "Compartilhamentos" },
  { value: "Total interações", label: "Total interações" },
];

const typeOptions = [
  { value: "Positivo", label: "Positivo" },
  { value: "Negativo", label: "Negativo" },
  { value: "Neutro", label: "Neutro" },
];

const SearchFilter = () => {
  // Defina o estado para cada filtro
  const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPopularity, setSelectedPopularity] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [initialDate, setInitialDate] = React.useState<Date | undefined>(
    new Date()
  );
  const [finalDate, setFinalDate] = React.useState<Date | undefined>(
    new Date()
  );

  const handleSelectedTime = (value) => {
    if (value === "Personalizado") {
      setOpenCalendar(true);
      return;
    }
    setOpenCalendar(false);
  };
  // Função para coletar os dados e enviar a requisição ao servidor
  const handleSearch = () => {
    const filters = {
      socialMedia: selectedSocialMedia,
      time: selectedTime,
      popularity: selectedPopularity,
      type: selectedType,
    };

    console.log("Filtros selecionados:", filters);

    // Aqui você faria a requisição ao servidor
    // Exemplo:
    // fetch('/api/search', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(filters),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error("Erro na busca:", error));
  };

  const handleSelectedDate = () => {
    const initial = initialDate?.toLocaleDateString();
    const final = finalDate?.toLocaleDateString();
    timeOptions.push({
      value: `${initial} - ${final}`,
      label: `${initial} - ${final}`,
    });
  };

  return (
    <div>
      <div className="flex mb-4">
        <SearchBar />
      </div>
      <div className="grid gap-6 grid-flow-col">
        <SelectFilter
          data={socialMediaOptions}
          placeholder="Rede social"
          onChange={(value) => setSelectedSocialMedia(value)}
        />
        <SelectFilter
          data={timeOptions}
          placeholder="Filtrar por data"
          onChange={(value) => handleSelectedTime(value)}
        />
        <SelectFilter
          data={popularityOptions}
          placeholder="Popularidade"
          onChange={(value) => setSelectedPopularity(value)}
        />
        <SelectFilter
          data={typeOptions}
          placeholder="Tipo de Sentimento"
          onChange={(value) => setSelectedType(value)}
        />
      </div>
      {openCalendar && (
        <div className="flex justify-center gap-6 mt-10">
          <DatePickerDemo />
          <DatePickerDemo />
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
