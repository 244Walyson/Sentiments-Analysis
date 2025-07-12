# Sentiments Tracker

**Ambiente de Desenvolvimento**

No Ambiente de Desenvolvimento, descreve-se o conjunto de ferramentas utilizadas para implementar o projeto. Neste trabalho, o ambiente de desenvolvimento é composto pelas seguintes ferramentas listadas na Tabela 1\.

**Tabela 1\. Ferramentas do ambiente de desenvolvimento.**

| Funcionalidade | Ferramenta |
| :---- | :---- |
| Modelo de análise de sentimentos | Python (BERTimbau) |
| API | Node.js |
| Frontend | Next.js |
| Banco de dados | PostgreSQL / mongoDB |
| Controle de versão | Git (Github, Gitlab) |
| Testes de software | Jest (Node.js) / pytest (python) |
| Biblioteca de estilo | Tailwind CSS |
| Análise de dados | pandas, numpy (python) |
| Hospedagem | Vercel (Frontend) / Azure (Backend, API)  |
| Visualização de dados | matplotlib |
| Sistema operacional | windows 11 / linux |

**Cronograma**
**Figura 1\. Gráfico de Gantt**  
<img width="454" height="200" alt="image" src="https://github.com/user-attachments/assets/bd5b5495-3c71-4de1-8c53-7677b2898e41" />


**Figura 2\. Diagrama de caso de uso**  
<img width="454" height="428" alt="image" src="https://github.com/user-attachments/assets/9caca902-eeb0-4e5b-8468-0a760210da76" />


Fonte: Elaboração Própria.

A Figura 3 apresenta o diagrama de classes desenvolvido para a modelagem do banco de dados, detalhando as principais entidades e suas respectivas relações.

**figura 3: Diagrama de classes do sistema**  
<img width="454" height="490" alt="image" src="https://github.com/user-attachments/assets/9e5f3e95-fb54-4442-b8a8-45117399d83f" />


Fonte: Elaboração Própria.

**5.3.  Interface do Sistema**

Nesta seção, são apresentadas as principais interfaces do sistema, que incluem telas de visualização de dados, análise detalhada, busca personalizada e informações técnicas sobre o modelo utilizado na análise de sentimentos.

A Figura 4 apresenta a página inicial do sistema, onde é exibido um resumo da última semana referente ao sentimento das postagens. Esta tela visa fornecer uma visão geral rápida dos dados analisados, permitindo que o usuário identifique tendências ou

anomalias de forma imediata.

**Figura 4\. Tela inicial.**  
<img width="454" height="218" alt="image" src="https://github.com/user-attachments/assets/4721dbe9-72f3-4752-990e-2d84342d5112" />


Fonte: Elaboração Própria.

Na Figura 5, é mostrada a página de análise detalhada, que exibe informações mais específicas, como a média de sentimentos por rede social e por publicação. Esta interface foi desenvolvida para facilitar a compreensão granular dos dados, permitindo comparações entre diferentes plataformas sociais.

**figura 5: Tela com análise detalhada**  
<img width="454" height="222" alt="image" src="https://github.com/user-attachments/assets/0ee3d66a-be88-412c-9a56-62ddc03169dc" />


Fonte: Elaboração Própria.

A Figura 6 ilustra a página de busca, onde o usuário pode realizar filtragens avançadas por publicações, sentimentos, intervalos de tempo e redes sociais. Este recurso possibilita uma análise personalizada, atendendo a cenários específicos de interesse.

**figura 6: Tela de busca**    
<img width="454" height="218" alt="image" src="https://github.com/user-attachments/assets/a35cda51-2fb9-455d-828d-001906a5f5dd" />


Fonte: Elaboração Própria.

A Figura 7 apresenta a página com informações detalhadas sobre o modelo utilizado para a análise de sentimentos. Nesta tela, são exibidos dados como acurácia, precisão, performance e a relação entre os resultados do modelo e os valores reais, permitindo uma avaliação clara e transparente da eficácia do sistema.

**figura 7: Tela de análise do do desempenho do modelo**  
<img width="454" height="227" alt="image" src="https://github.com/user-attachments/assets/fde17325-b037-4f2d-8bee-a84cd9beeff9" />


Fonte: Elaboração Própria.
