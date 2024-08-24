.PHONY: build_site

ENV ?= build

build_site:
	@echo "Running dbt in $(ENV) environment."
	@echo "==============================="
	@echo "Compiling..."
	dbt compile --target $(ENV)

	@echo "==============================="
	@echo "Running..."
	dbt run --target $(ENV)

	@echo "==============================="
	@echo "Generating docs..."
	dbt docs generate --target $(ENV)
	cp -rf ./target/index.html ./target/catalog.json ./target/manifest.json ../site/docs/

	@echo "==============================="
	@echo "Copying database..."
	cp -rf ./data/batch.duckdb ./reports/sources/data/batch.duckdb

	@echo "==============================="
	@echo "Copying report sources..."
	cp -rf ./target/compiled/analytics/models/marts/reports/ ./reports/sources/data/

	@echo "==============================="
	@echo "Building Evidence reports..."
	evidence build --output ../site/data/