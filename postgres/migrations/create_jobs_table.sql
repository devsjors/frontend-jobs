create table if not exists jobs (
    id serial not null,
    title text not null,
    description text not null,
    created_at timestamp not null default now(),
    updated_at timestamp not null default now(),
    CONSTRAINT jobs_pkey PRIMARY KEY (id)
);
