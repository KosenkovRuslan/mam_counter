class $project_counter extends $project_lom_view {

	count( next?: number ) {
		return $project_lom_storage.value( 'count' , next ) ?? 0
	}

	count_str( next?: string ) {
		return this.count( next?.valueOf && Number(next) ).toString()
	}

	inc() {
		this.count( this.count() + 1 )
	}

	dec() {
		this.count( this.count() - 1 )
	}

	_Inc = null as unknown as $project_lom_view
	Inc() {
		if (this._Inc) return this._Inc
		
		const obj = new $project_lom_button
		obj.title = ()=> '+'
		obj.click = ()=> this.inc()

		return this._Inc = obj
	}

	_Dec = null as unknown as $project_lom_view
	Dec() {
		if (this._Dec) return this._Dec

		const obj = new $project_lom_button
		obj.title = ()=> '-'
		obj.click = ()=> this.dec()

		return this._Dec = obj
	}

	_Count = null as unknown as $project_lom_view
	Count() {
		if (this._Count) return this._Count

		const obj = new $project_lom_input
		obj.value = (next?: string)=> this.count_str( next )

		return this._Count = obj
	}

	sub() {
		return [
			this.Dec(),
			this.Count(),
			this.Inc(),
		]
	}
}

// Вызываем для монтирования приложения в DOM-дерево
$project_lom_view.root = ()=> $project_counter

