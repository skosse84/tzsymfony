<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Image;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class DefaultController extends AbstractController
{

    /**
     * @Route("/", name="indexroute")
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function index(Request $request)
    {
        $image = new Image();

        $form = $this->createFormBuilder($image)
            ->add('src', FileType::class)
            ->add('name', TextType::class)
            ->add('save', SubmitType::class, array('label' => 'Add Image'))
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            return $this->redirectToRoute('success');
        }

        return $this->render('new.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    /**
     *  @Route("/success", name="success")
     */
    public function success()
    {
        return $this->render('success.html.twig');
    }

    /**
     * @Route("/new", name="newroute")
     * @param Request $request
     * @return Response
     */
    public function new(Request $request)
    {
        return new Response('Route new!');
    }
}