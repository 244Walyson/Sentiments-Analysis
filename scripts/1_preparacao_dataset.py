import pandas as pd
from sklearn.model_selection import train_test_split

# Carregar o Dataset
df = pd.read_csv('data/min_tweets.csv')

# Dividir o Dataset
train_df, test_df = train_test_split(df, test_size=0.2, random_state=42)

# Salvar conjuntos
train_df.to_csv('data/train_dataset.csv', index=False)  # Conjunto de treinamento
test_df.to_csv('data/test_dataset.csv', index=False)    # Conjunto de teste

print("Dataset preparado e salvo com sucesso!")
