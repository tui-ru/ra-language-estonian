module.exports = {
	ra: {
		action: {
			export: 'Eksport',
			add_filter: 'Lisage filter',
			add: 'Lisage',
			back: 'Tagasi',
			bulk_actions: '1 valitud |||| %{smart_count} on valitud',
			cancel: 'Tühista',
			clear_input_value: 'Selge',
			clone: 'Koopia',
			confirm: 'Kinnitage',
			create: 'Loo',
			delete: 'Kustuta',
			edit: 'Redigeeri',
			list: 'Loend',
			refresh: 'Värskenda',
			remove_filter: 'Eemaldage filter',
			remove: 'Kustuta',
			save: 'Salvesta',
			search: 'Otsi',
			show: 'Vaade',
			sort: 'Sorteerimine',
			undo: 'Tühista',
			expand: 'Avalda',
			close: 'Sulgege',
		},
		boolean: {
			true: 'Jah',
			false: 'Ei',
			null: '',
		},
		page: {
			create: 'Loo %{name}',
			dashboard: 'Kodu',
			edit: '%{name} #%{id}',
			error: 'Midagi läks valesti',
			list: '%{name}',
			loading: 'Laadimine',
			not_found: 'Ei leitud',
			show: '%{name} #%{id}',
			empty: '%{name} pole.',
			invite: 'Kas soovite lisada veel ühe?',
		},
		input: {
			file: {
				upload_several: 'Lohistage failid siia või klõpsake valimiseks.',
				upload_single: 'Lohistage fail siia või klõpsake valimiseks.',
			},
			image: {
				upload_several: 'Lohistage pilte siia või klõpsake valimiseks.',
				upload_single: 'Lohistage pilt siia või klõpsake valimiseks.',
			},
			references: {
				all_missing: 'Seotud andmeid ei leitud',
				many_missing: 'Osa seotud andmeid pole saadaval.',
				single_missing: 'Lingitud objekt pole saadaval',
			},
			password: {
				toggle_visible: 'Peida parool',
				toggle_hidden: 'Näita parooli',
			},
		},
		message: {
			about: 'Abi',
			are_you_sure: 'Oled kindel',
			bulk_delete_content:
				'Kas soovite kindlasti kustutada %{name}? |||| Kas soovite kindlasti kustutada objekte saidiga %{smart_count}?',
			bulk_delete_title: 'Kustuta %{name} |||| Kustuta %{smart_count} %{name}',
			delete_title: 'Kustuta %{name} #%{id}',
			details: 'Kirjeldus',
			error: 'Taotlusprotsessis ilmnes viga ja seda ei saa täita',
			invalid_form: 'Vorm pole õigesti täidetud, palun kontrollige vigu',
			loading: 'Allalaadimine, palun oodake ...',
			no: 'Ei',
			not_found: 'URL-i viga või kasutate valet linki',
			yes: 'Jah',
		},
		navigation: {
			no_results: 'Tulemusi ei leitud',
			no_more_results: '%{page} on nummerdamata, proovige eelmist',
			page_out_of_boundaries: '%{page} leht on piiridest väljas',
			page_out_from_end: 'Viimasest lehest ei õnnestu liikuda',
			page_out_from_begin: 'Lehe number ei tohi olla väiksem kui 1',
			page_range_info: '%{offsetBegin}-%{offsetEnd} %{total}',
			page_rows_per_page: 'Ridasid lehel:',
			next: 'Järgmine',
			prev: 'Eelmine',
		},
		auth: {
			auth_check_error: 'Jätkamiseks logige sisse.',
			user_menu: 'Profiil',
			username: 'Kasutajanimi',
			password: 'Parool',
			sign_in: 'Logi sisse',
			sign_in_error: 'Autentimine nurjus, proovige uuesti',
			logout: 'Mine välja',
		},
		notification: {
			updated: 'Üksus värskendatud |||| %{smart_count} värskendatud',
			created: 'Üksus on loodud',
			deleted: 'Punkt kustutatud |||| %{smart_count} kustutatud',
			bad_item: 'Üksus pole kehtiv.',
			item_doesnt_exist: 'Üksust pole olemas',
			http_error: 'Serveri tõrge',
			data_provider_error: 'Viga dataProvider, kontrollige konsooli',
			i18n_error: 'Määratud keele tõlke laadimine ebaõnnestus.',
			canceled: 'Operatsioon tühistatud',
			logged_out: 'Teie seanss on lõpule viidud, proovige uuesti ühendada / uuesti sisse logida',
		},
		validation: {
			required: 'Vajalik',
			minLength: 'Minimaalne tähemärkide arv% {min}',
			maxLength: 'Maksimaalne tähemärkide arv% {max}',
			minValue: 'Minimaalne väärtus on% {min}',
			maxValue: 'Väärtus võib olla% {max} või väiksem',
			number: 'Peab olema number',
			email: 'Vale e-posti aadress',
			oneOf: 'Peab olema üks järgmistest:% {options}',
			regex: 'Peab olema vormingus (regexp):% {pattern}',
		},
	},
};
