import { Category, CategoryProperties } from './category';
import { omit } from 'lodash';

describe( "Category Unit Tests", () => {
	
    test('constructor of category', () => {
    	// Triple AAA - Arrange Act Assert 
    	//Arrange
    	// Act
    	
        let category = new Category({name: "Movie"});
		
        let props = omit(category.props,'created_at');
        expect(props).toStrictEqual({
        	name: "Movie",
        	description: null,
        	is_active: true
        });        
		expect(category.props.created_at).toBeInstanceOf(Date);


		
		category = new Category({
			name: "Movie",
			description: "some description",
			is_active: false
		});
		let created_at = new Date();		
		let propsDateString = category.props.created_at?.toISOString().split('.')[0];
		let createdDateString = created_at.toISOString().split('.')[0];
		expect(createdDateString).toBe(propsDateString);

		
		const propsCheck = omit(category.props,'created_at');
        expect(propsCheck).toStrictEqual({
        	name: "Movie",
			description: "some description",
			is_active: false,			
        });



        category = new Category({
   			name: "Movie 1",
   			description: "other description",
   		});
   		expect(category.props).toMatchObject({
   			name: "Movie 1",
   			description: "other description"
   		});



        category = new Category({
   			name: "Movie 1",
   			is_active: true
   		});
		expect(category.props).toMatchObject({
			name: "Movie 1",
			is_active: true
		});



		created_at = new Date();		
        category = new Category({
   			name: "Movie 1",
   			created_at,
   		});
		expect(category.props).toMatchObject({
			name: "Movie 1",
			created_at
		});
		
		//Assert       
        /*expect(category.name).toBe("Movie");
        expect(category.description).toBe("description");
        expect(category.is_active).toBe(true);
        expect(category.created_at).toBe(props.created_at);*/
        
        
    }); 


    test('getter of name field', () => {
    	const category = new Category({ name: "Average"});
    	expect(category.name).toBe('Average');    	
    });


    test('getter and setter of description field', () => {
    	let category = new Category({ name: 'Movie', description: 'some description'});    	
    	expect(category.description).toBe('some description');
		
    	category = new Category({name: 'Movie'});
    	expect(category.description).toBeNull();

    	category = new Category({ name: "Movie"});
    	category["description"] = "other description";
    	expect(category.description).toBe("other description");

    	category["description"] = undefined;
    	expect(category.description).toBeNull();

    	category["description"] = null;
    	expect(category.description).toBeNull();
    	    	
    });


	test('getter and setter of is_active prop', () => {
		let category = new Category({name: "Movie", is_active: true});
		expect(category.is_active).toBeTruthy();


		category = new Category({name: "Movie", is_active: false});
		expect(category.is_active).toBeFalsy();


		category = new Category({name: "Movie"});
		expect(category.is_active).toBeTruthy();
	});


	test('getter of created_at prop', () => {
		let category = new Category({ name: "Movie"});
		expect(category.created_at).toBeInstanceOf(Date);

		let created_at = new Date();
		category = new Category({ name: "Movie", created_at});
		expect(category.created_at).toBe(created_at);	
	});


	test('id field', () => {
		type CategoryData = { props: CategoryProperties, id?: string};
		
		const data: CategoryData[] = [
			{props: {name: "Movie"} },
			{props: {name: "Movie"}, id: undefined },
			{props: {name: "Movie"}, id: null},
			{props: {name: "Movie"}, id: '5d74045a-a0b0-4a46-8189-42e64a2669ed'}
		];
		
		data.forEach((dt) => {
			let category = new Category(dt.props,dt.id);
			expect(category.id).not.toBeNull();
			if(typeof dt.id === 'string') expect(category.id).toBe(dt.id);
		});
		
	});

	it('should update category field descripton if not send name and description prop', () =>{
		let category = new Category({name: "Serie", description: "Novidade"});
		category.update({});
		expect(category.name).toBe('Serie');
		expect(category.description).toBeNull();
	});

	test('should update category name if send name prop', () => {
		let category = new Category({name: "Serie"});
		category.update({name: "Movie"});		
		expect(category.name).toBe("Movie");

		category.update({name: 'Serie'});
		expect(category.name).toBe("Serie");

	});

	it('should update category description if send description prop', () => {
		let category = new Category({name: "Serie"});
		category.update({ description: "fake-description"});
		expect(category.name).toBe("Serie");
		expect(category.description).toBe("fake-description");
	});

	it('should update category name and description',() => {
		let category = new Category({name: "Serie"});
		category.update({name: "Movie", description: "movie"});
		expect(category.name).toBe("Movie");
		expect(category.description).toBe("movie");
	});

	test('activate and deactivate category', () => {
		let category = new Category({name: "Movie", is_active: false});
		category.activate();
		expect(category.is_active).toBeTruthy();


		category.deactive();
		expect(category.is_active).toBeFalsy();


		category.activate();
		expect(category.is_active).toBeTruthy();
	});

	test('deactive category', () => {

	});
    
});
// CI - primeiro os testes Unit??rio, e por ??ltimo o teste de integra????o
