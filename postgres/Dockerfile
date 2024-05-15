FROM postgres:alpine

# Migrations
ADD /postgres/migrations/create_jobs_table.sql /docker-entrypoint-initdb.d

# Seeders
ADD /postgres/seeders/jobs_seeder.sql /docker-entrypoint-initdb.d

RUN chmod a+r /docker-entrypoint-initdb.d/*
