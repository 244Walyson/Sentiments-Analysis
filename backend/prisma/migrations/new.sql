create table users (
    id bigint primary key generated always as identity,
    name text not null,
    email text not null unique,
    password text not null,
    username text not null unique,
    birthday date,
    gender text,
    phone_number text unique,
    instagram_url text,
    x_url text,
    img_url text,
    bio text,
    cpf text unique,
    company_id bigint references companies (id) on delete set null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    last_login timestamp,
    is_active boolean default true
);

create table companies (
    id bigint primary key generated always as identity,
    name text not null,
    cnpj text not null unique,
    instagram_url text,
    x_url text,
    website_url text,
    industry text,
    location text,
    img_url text,
    bio text,
    admin_id bigint references users (id) on delete set null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    is_active boolean default true
);

create table posts (
    id bigint primary key generated always as identity,
    company_id bigint references companies (id) on delete cascade,
    network text not null,
    post_url text unique,
    content text,
    created_at timestamp not null default current_timestamp,
    engagement_score int,
    sentiment_score int,
    is_active boolean default true
);

create table engagement (
    id bigint primary key generated always as identity,
    company_id bigint references companies (id) on delete cascade,
    post_id bigint references posts (id) on delete cascade,
    improvement_percentage int,
    total_reactions int,
    period text,
    created_at timestamp not null default current_timestamp
);

create table audience_by_network (
    id bigint primary key generated always as identity,
    post_id bigint references posts (id) on delete cascade,
    network text not null,
    average_reactions int,
    reach int,
    impressions int,
    created_at timestamp not null default current_timestamp
);

create table sentiment_by_network (
    id bigint primary key generated always as identity,
    company_id bigint references companies (id) on delete cascade,
    network text not null,
    positive int,
    negative int,
    neutral int,
    total_mentions int,
    created_at timestamp not null default current_timestamp
);

create table sentiment_by_post (
    id bigint primary key generated always as identity,
    post_id bigint references posts (id) on delete cascade,
    network text not null,
    positive int,
    negative int,
    neutral int,
    total_comments int,
    created_at timestamp not null default current_timestamp
);

create table sentiment_trends (
    id bigint primary key generated always as identity,
    company_id bigint references companies (id) on delete cascade,
    date date not null,
    network text not null,
    positive int,
    negative int,
    neutral int,
    trend_score int,
    created_at timestamp not null default current_timestamp
);

create table notifications (
    id bigint primary key generated always as identity,
    user_id bigint references users (id) on delete cascade,
    message text not null,
    is_read boolean default false,
    created_at timestamp not null default current_timestamp
);

CREATE TABLE refresh_tokens (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    refresh_token TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    revoked BOOLEAN DEFAULT FALSE,
    ip_address VARCHAR(45),
    user_agent TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
